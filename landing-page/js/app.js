//creating the navbar of section list dynamically

function mylistItems() {
    const fragment = document.createDocumentFragment();
    let mylist = document.getElementById("navbar__list")
    let sections = document.querySelectorAll("section");
    //for of loos to loop on the sections 
    // i is the index of the section



    for (const [i, section] of sections.entries()) {
        let index = i + 1;
        console.log(index);
        let link = document.createElement("A");
        link.addEventListener('click', scrollToSection);
        function scrollToSection(event) {
            event.preventDefault();
            //console.log("prevent");
            event.target.setAttribute("href", "#" + section.id);
            // console.log(event.target);
            window.location.href = "#" + section.id;
            link.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

        }
        // for (let i = 1; i < 5; i++) {
        //     let link = document.createElement("A");
        //     link.addEventListener('click', scrollToSection);
        //     function scrollToSection(event) {
        //         event.preventDefault();
        //         //console.log("prevent");
        //         event.target.setAttribute("href", "#section" + i);
        //         // console.log(event.target);
        //         window.location.href = "#section" + i;
        //         link.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" });

        //     }

        //create the li element on the list 
        let lielement = document.createElement("LI");
        lielement.setAttribute("id", "nav-section" + index);
        //create the anchor link element on li s
        let linktext = document.createTextNode("section" + index);
        link.appendChild(linktext);
        lielement.appendChild(link);
        mylist.appendChild(lielement);

        fragment.appendChild(lielement);



    }
    mylist.appendChild(fragment);


}
mylistItems();
//adding the active section to the view port 
window.addEventListener('scroll', toggleActiveState);
function toggleActiveState() {
    if (!!window.IntersectionObserver) {
        let observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                console.log(entry);

                entry.target.classList.remove('your-active-class');
                let liNav = document.getElementById("nav-" + entry.target.getAttribute("id")).classList.remove('item-active-class');

                if (entry.isIntersecting) {
                    console.log(entry.target.getAttribute("id"));

                    entry.target.classList.add('your-active-class');
                    let liNav = document.getElementById("nav-" + entry.target.getAttribute("id")).classList.add('item-active-class');
                    observer.unobserve(entry.target);
                }

            });
        }, { rootMargin: "-20% 0% -40% 0%" });
        document.querySelectorAll('section').forEach(section => { observer.observe(section) });
    }

    else document.querySelector('#warning').style.display = 'block';

}


