const header = document.querySelector("header");

const first_skill = document.querySelector(".skill:first-child");
const sk_counters = document.querySelectorAll(".counter span");
const progress_bars = document.querySelectorAll(".skills svg circle");

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

function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;
    
    if(window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
}

function skillsCounter() {
    if (!hasReached(first_skill)) return;

    progress_bars.forEach((p) => (p.style.animation = "progress 2s ease-in-out forwards"));
}




// Create a Portfolio Website Using HTML & CSS & JavaScript | Light & Dark Theme
//https://www.youtube.com/watch?v=kk5dZVfCpgk
// minute 53:00