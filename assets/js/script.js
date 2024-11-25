const click_navbar = document.querySelector(".click_navbar")
const navbar_hidden = document.querySelector(".navbar_hidden")
const body = document.querySelector("body")
click_navbar.addEventListener("click", function () {
    navbar_hidden.classList.toggle("visible_navbar")
    console.log("salam");

})