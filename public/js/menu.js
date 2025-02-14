document.addEventListener("DOMContentLoaded", function () {
    const burger = document.getElementById("burger-btn");
    const menu = document.getElementById("menu");
    const menuClose = document.getElementById("close-btn");

    burger.addEventListener("click", function () {
        menu.dataset.open = "true"
        // Lock the body scroll
        document.body.style.overflow = "hidden";
    });

    menuClose.addEventListener("click", function () {
        menu.dataset.open = "false"
        // Unlock the body scroll
        document.body.style.overflow = "auto";
    });
});
