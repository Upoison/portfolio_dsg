const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg");

window.addEventListener("scroll", () =>{
    skillCounter();
});

/* ------------------ Sticky Navbar -------------- */

function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener("scroll", stickyNavbar);

/* ------------------ Reveal Animation -------------- */

let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
});

sr.reveal(".showcase-info", {delay: 600});
sr.reveal(".showcase-image", { origin: "top", delay: 700});

/* ------------------ Skills Progress Bar Animation -------------- */

function skillCounter(){
    console.log("You've reached the skills section");
}