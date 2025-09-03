



const navItems = document.getElementById("nav-items")
const hamburger = document.getElementById("hamburger-menu")
const first = document.getElementById("first")
const second = document.getElementById("second")
const third = document.getElementById("third")


hamburger.addEventListener("click", () =>{
    first.classList.toggle("firstRotated")
    second.classList.toggle("opacity-0")
    third.classList.toggle('thirdRotated')
    navItems.classList.toggle("top-0")
})

