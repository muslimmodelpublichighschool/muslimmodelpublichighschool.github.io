var nav = document.getElementById("nav_side");
var navm = document.getElementById("navbar");
var open = document.getElementById("open");
var close = document.getElementById("close");
function navOpen() {
    nav.style.height = "324px";
    navm.style.height = "324px";
    open.style.display = "none";
    close.style.display = "block";
}
function navClose() {
    nav.style.height = "55px";
    navm.style.height = "55px";
    open.style.display = "block";
    close.style.display = "none";
}