//room 1
let door1 = false;
let door2 = false;

function bigButton() {
    const button = prompt("WHAT IS 9 + 10!")
    if (button == 21) {
        door2 = true
        console.log("door2 open")
        win()
    }
    else if (button == 19) {
        door2 = true
        console.log("door2 open")
        win()
    }
    else {
        alert("wrong")
    }
}



const awnser = [3, 2, 4, 1]
let input = []

let i

function stopper() {
    while (i > 4) {
        input = []
        i= input.length
        document.getElementById("number").innerHTML = ""
    }
}

function winOrLose() {
    if (
        input[0] == awnser[0] &&
        input[1] == awnser[1] &&
        input[2] == awnser[2] &&
        input[3] == awnser[3]
    ) {
        door1 = true
        console.log("door1 open");
        document.getElementById("green").style.visibility = "visible";
    }
    win();
}

function win() {
    if (door1 == true && door2 == true) {
        document.getElementById("door").style.visibility = "visible";
}
}


function button1() {
    input.push(1);
    document.getElementById("number").innerHTML += "1 ";
    console.log("1")
    console.log(input)
    i = input.length
    console.log(i)
    if (input.length == 4) {
        winOrLose()
    }
    stopper();
}
function button2() {
    input.push(2);
    document.getElementById("number").innerHTML += "2 ";
    console.log(2)
    console.log(input)
    i = input.length
    console.log(i)
    stopper();
    if (input.length == 4) {
        winOrLose()
    }
}
function button3() {
    input.push(3);
    document.getElementById("number").innerHTML += "3 ";
    console.log(3)
    console.log(input)
    i = input.length
    console.log(i)
    stopper();
    if (input.length == 4) {
        winOrLose()
    }
}
function button4() {
    input.push(4);
    document.getElementById("number").innerHTML += "4 ";
    console.log(4);
    console.log(input);
    i = input.length;
    console.log(i);
    stopper();
    if (input.length == 4) {
        winOrLose()
    }
}



