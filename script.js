// MOBILE MENU ICON TOGGLE //
var hamIcon = document.getElementById("hamIcon").addEventListener("click", toggle);
function toggle() {
    var mobNav = document.getElementById("sideDiv");
    if (mobNav.style.display === "none") {
        mobNav.style.display = "block";
    } else {
        mobNav.style.display = "none";
    }
};

// NAVBAR CHANNGE ON SCROLL //
var nav = document.getElementById("navbar");
var change = window.onscroll = function (e) {
    e.preventDefault();
     if (window.scrollY <=80) {
        nav.style.backgroundColor = "transparent";
    } else {
        nav.style.backgroundColor = "rgba(5, 5, 5, 0.95)";
    }   
};