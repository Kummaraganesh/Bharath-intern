// Function to toggle a class for responsive navigation
function toggleNav() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("responsive");
}

// Function to handle smooth scrolling to sections
function scrollToSection(event) {
    event.preventDefault();
    var target = event.target.getAttribute("href");
    var offset = document.querySelector(target).offsetTop;

    window.scrollTo({
        top: offset,
        behavior: "smooth"
    });
}

// Add event listener for navigation toggle
var navToggle = document.getElementById("nav-toggle");
navToggle.addEventListener("click", toggleNav);

// Add event listener for smooth scrolling
var links = document.querySelectorAll("a[href^='#']");
links.forEach(function(link) {
    link.addEventListener("click", scrollToSection);
});
