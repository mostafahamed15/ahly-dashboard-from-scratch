function openNav() {
    document.getElementById("mySidenav").style.width = "200px";
    document.getElementById("sidenavClosed").style.display = "none";
    document.getElementById('sidenavOpen').style.display = "block";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "40px";
    document.getElementById("sidenavClosed").style.display = "block";
    document.getElementById('sidenavOpen').style.display = "none";

}
