document.addEventListener("DOMContentLoaded", function () {
    const navbarToggle = document.getElementById("navbarToggle");
    const navbar = document.getElementById("navbar");
    const closeIcon = document.querySelector(".close-icon");

    navbarToggle.addEventListener("click", function () {
        navbar.classList.toggle("active");
        closeIcon.classList.toggle("active");
    });
});
