
/*experiencia*/
var button = document.getElementById("toggleex");
var target = document.getElementById("targetex");
var bool = true;


function displayToggle() {
    if (bool) {
        target.setAttribute("class", "experiencia show")
        bool = false;
        button.setAttribute("class", "selectorex azul")

    } else {
        target.setAttribute("class", "hide")
        bool = true;
        button.setAttribute("class", "selectorex gris")
    }
}

button.addEventListener("click", displayToggle, bool);

/*educacion*/
var buttonedu = document.getElementById("toggleedu");
var targetedu = document.getElementById("targetedu");



function displayToggleEdu() {
    if (bool) {
        targetedu.setAttribute("class", "educacion show")
        bool = false;
        buttonedu.setAttribute("class", "selectoredu azul")

    } else {
        targetedu.setAttribute("class", "hide")
        bool = true;
        buttonedu.setAttribute("class", "selectoredu gris")
    }
}

buttonedu.addEventListener("click", displayToggleEdu, bool);

/*cursos*/
var buttoncur = document.getElementById("togglecur");
var targetecur = document.getElementById("targetecur");



function displayToggleCur() {
    if (bool) {
        targetecur.setAttribute("class", "cursos show")
        bool = false;
        buttoncur.setAttribute("class", "selectorcur azul")

    } else {
        targetecur.setAttribute("class", "hide")
        bool = true;
        buttoncur.setAttribute("class", "selectorcur gris")
    }

}

buttoncur.addEventListener("click", displayToggleCur, bool);

/*menu dispositivo movil*/
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
