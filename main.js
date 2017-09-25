
/*experiencia*/
var buttonEx = document.getElementById("toggleex");
var targetEx = document.getElementById("targetex");
var navEx = document.getElementById("nav3");
var bool = true;


function displayToggleEx() {
    if (bool) {
        targetEx.setAttribute("class", "experiencia show")
        bool = false;
        buttonEx.setAttribute("class", "selectorex azul")
        targetEdu.setAttribute("class", "hide")
        targetCur.setAttribute("class", "hide")
        buttonEdu.setAttribute("class", "selectoredu gris")
        buttonCur.setAttribute("class", "selectoredu gris")
    } else {
        targetEx.setAttribute("class", "hide")
        bool = true;
        buttonEx.setAttribute("class", "selectorex gris")
    }
}

buttonEx.addEventListener("click", displayToggleEx, bool);
navEx.addEventListener("click", displayToggleEx, bool);

/*educacion*/
var buttonEdu = document.getElementById("toggleedu");
var targetEdu = document.getElementById("targetedu");
var navEdu = document.getElementById("nav4")


function displayToggleEdu() {
    if (bool) {
        targetEdu.setAttribute("class", "educacion show")
        bool = false;
        buttonEdu.setAttribute("class", "selectoredu azul")
        targetEx.setAttribute("class", "hide")
        targetCur.setAttribute("class", "hide")
        buttonEx.setAttribute("class", "selectoredu gris")
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
        targetEx.setAttribute("class", "hide")
        targetEdu.setAttribute("class", "hide")
        buttonEx.setAttribute("class", "selectoredu gris")
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
