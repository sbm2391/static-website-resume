var button = document.getElementById("toggle");
var target = document.getElementById("target");
var bool = true;

function displayToggle() {
    if (bool) {
        target.setAttribute("class", "experiencia show")
        bool = false;
    } else {
        target.setAttribute("class", "hide")
        bool = true;
    }
}

button.addEventListener("click", displayToggle, bool);

var btn = document.getElementById("btn");
var menu = document.getElementById("mininav");


function displayMenu() {
    if (bool) {
        menu.setAttribute("class", "navi showing")
        bool = false;
    } else {
        menu.setAttribute("class", "hidding")
        bool = true;
    }
}

btn.addEventListener("click", displayMenu, bool);
