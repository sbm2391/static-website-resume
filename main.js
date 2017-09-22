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
var bool = true;

function displaymenu() {
    if (bool) {
        menu.setAttribute("class", "nav ul showing")
        bool = false;
    } else {
        menu.setAttribute("class", "menuhide")
        bool = true;
    }
}

button.addEventListener("click", displayToggle, bool);
