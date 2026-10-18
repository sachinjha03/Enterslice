let navbar = document.getElementById("navbar");
let navbarSearchIconBox = document.getElementById("navbarSearchIconBox")
let navbarButton = document.getElementById("navbarButton")
let navbarLogo = document.getElementById("navbarLogo")
let navbarLinks = document.getElementById("navbarLinks")
let scrollLeft = document.getElementById("scrollLeft");
let scrollRight = document.getElementById("scrollRight");
let serviceSectionScroller = document.getElementById("serviceSectionScroller")
let menuIcon = document.getElementById("menuIcon")
let sideMenu = document.getElementById("sideMenu")
let closeIcon = document.getElementById("closeIcon")
let callBox = document.getElementById("callBox")
let callIcon = document.getElementById("callIcon")
let downArrow = document.getElementById("downArrow")


window.addEventListener("scroll" , () => {
    if(window.scrollY > 50){
        navbar.style.backgroundColor = "white";
        navbarSearchIconBox.style.border = "1px solid var(--gray_500)"
        navbarButton.classList.add("blue-btn")
        navbarLogo.style.filter = "invert(100%)"
        navbarLinks.classList.add("scrolled-link")
        menuIcon.style.filter = "invert(0%)"
        callBox.style.borderColor = "var(--blue_900)"
        callIcon.style.filter = "invert(0%)"
        downArrow.style.filter = "invert(0%)"
    }else{
        navbar.style.backgroundColor = "transparent"
        navbarSearchIconBox.style.border = "0"
        navbarButton.classList.remove("blue-btn")
        navbarLogo.style.filter = "invert(0%)"
        navbarLinks.classList.remove("scrolled-link")
        menuIcon.style.filter = "invert(100%)"
        callBox.style.borderColor = "white"
        callIcon.style.filter = "invert(100%)"
        downArrow.style.filter = "invert(100%)"
    }
})

scrollLeft.addEventListener("click" , () => {
    serviceSectionScroller.scrollLeft -= 300;
})
scrollRight.addEventListener("click" , () => {
    serviceSectionScroller.scrollLeft += 300;
})

menuIcon.addEventListener("click" , () => {
    sideMenu.style.right = 0
})
closeIcon.addEventListener("click" , () => {
    sideMenu.style.right = "-100%"
})