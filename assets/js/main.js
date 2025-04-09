// -------------- Toggle Button --------------
const navMenu = document.getElementById("nav-menu");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]");
    hamburger.classList.toggle("ri-close-large-line");
});

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]");
        hamburger.classList.toggle("ri-close-large-line");
    })
})

// -------------- Scroll Navbar --------------
const scrollHeader = () => {
    const header = document.getElementById("navbar");

    if (this.scrollY >= 50) {
        header.classList.add("bg-black", "bg-opacity-80");
    } else {
        header.classList.remove("bg-black", "bg-opacity-80");
    }
}

window.addEventListener("scroll", scrollHeader);