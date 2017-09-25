
/*experiencia*/
var button = document.getElementById("toggleex");
var target = document.getElementById("targetex");
var navEx = document.getElementById("nav3");
var bool = true;


function displayToggle() {
    if (bool) {
        target.setAttribute("class", "experiencia show")
        bool = false;
        button.setAttribute("class", "selectorex azul")
        targetEdu.setAttribute("class", "hide")
        targetCur.setAttribute("class", "hide")
        buttonEdu.setAttribute("class", "selectoredu gris")
        buttonCur.setAttribute("class", "selectoredu gris")
    } else {
        target.setAttribute("class", "hide")
        bool = true;
        button.setAttribute("class", "selectorex gris")
    }
}

button.addEventListener("click", displayToggle, bool);
navEx.addEventListener("click", displayToggle, bool);

/*educacion*/
var buttonEdu = document.getElementById("toggleedu");
var targetEdu = document.getElementById("targetedu");
var navEdu = document.getElementById("nav4")


function displayToggleEdu() {
    if (bool) {
        targetEdu.setAttribute("class", "educacion show")
        bool = false;
        buttonEdu.setAttribute("class", "selectoredu azul")
        target.setAttribute("class", "hide")
        targetCur.setAttribute("class", "hide")
        button.setAttribute("class", "selectoredu gris")
        buttonCur.setAttribute("class", "selectoredu gris")

    } else {
        targetEdu.setAttribute("class", "hide")
        bool = true;
        buttonEdu.setAttribute("class", "selectoredu gris")
    }
}

buttonEdu.addEventListener("click", displayToggleEdu, bool);
navEdu.addEventListener("click", displayToggleEdu, bool);

/*cursos*/
var buttonCur = document.getElementById("togglecur");
var targetCur = document.getElementById("targetecur");
var navCur = document.getElementById("nav5")


function displayToggleCur() {
    if (bool) {
        targetCur.setAttribute("class", "cursos show")
        bool = false;
        buttonCur.setAttribute("class", "selectorcur azul")
        target.setAttribute("class", "hide")
        targetEdu.setAttribute("class", "hide")
        button.setAttribute("class", "selectoredu gris")
        buttonEdu.setAttribute("class", "selectoredu gris")

    } else {
        targetCur.setAttribute("class", "hide")
        bool = true;
        buttonCur.setAttribute("class", "selectorcur gris")
    }

}

buttonCur.addEventListener("click", displayToggleCur, bool);
navCur.addEventListener("click", displayToggleCur, bool);

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
