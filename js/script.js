const header = document.querySelector('header')

window.addEventListener("scroll", () => {
    header.classList.toggle('sticky', this.window.scrollY > 80);
})

//menu 

let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
    menu.classList.toggle("bx-x")
    navlist.classList.toggle("open")
}

window.onscroll = () => {
    menu.classList.remove("bx-x");
    navlist.classList.remove("open");
}

// scroll

const sr = ScrollReveal({
    origin: "top",
    distance: "85px",
    duration: 2000,
    reset: false
});

sr.reveal(".home-text",{delay:300});
sr.reveal(".home-img",{delay:400});
sr.reveal(".container",{delay:400});

sr.reveal(".about-img",{});
sr.reveal(".about-text",{delay:400});

sr.reveal(".middle-text",{});
sr.reveal(".row-btn,.shop-content",{delay:300});

sr.reveal(".review, .contact",{delay:300});