let cube = false;
let circle = false;


function circleFunction() {
    circle = true;
    document.getElementById("circle").style.visibility = "hidden";
    document.getElementById("circle1").style.visibility = "visible";
    if (cube == true && circle == true) {
        document.getElementById("door").style.visibility = "visible";
    }
}

function cubeFunction() {
    cube = true;
    document.getElementById("cube").style.visibility = "hidden";
    document.getElementById("cube1").style.visibility = "visible";
    if (cube == true && circle == true) {
        document.getElementById("door").style.visibility = "visible";
    }
}