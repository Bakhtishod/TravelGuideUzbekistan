function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.style.display === "block") {
        x.style.display = "none";
        document.querySelector('h1').style.zIndex = 1000; // Reset z-index of h1
    } else {
        x.style.display = "block";
        document.querySelector('h1').style.zIndex = -1; // Send h1 to back when menu is open
    }
}
