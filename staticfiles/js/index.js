document.addEventListener("DOMContentLoaded", function () {
    let navLinks = document.querySelectorAll(".head-nav a");

    // Function to set the active class
    function setActive(link) {
        navLinks.forEach((nav) => nav.classList.remove("active"));
        link.classList.add("active");
    }

    // Set "Home" as active on page load
    let currentPath = window.location.pathname;
    let defaultActive = navLinks[0]; // Default to "Home"

    navLinks.forEach((link) => {
        if (link.getAttribute("href") === currentPath) {
            defaultActive = link;
        }
        link.addEventListener("click", function () {
            setActive(this);
        });
    });

    setActive(defaultActive);
});
