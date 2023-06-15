function red() {
    document.getElementById("red").style.visibility = "hidden"; 
}


function lines() {
    let text = prompt("What can you break, even if you never pick it up or touch it?");
    if (text == "a promise" || text == "promise") {
        document.getElementById("green").style.visibility = "visible";
        document.getElementById("text").style.visibility = "hidden";
        document.getElementById("door").style.visibility = "visible";
    }
    else {
        document.getElementById("red").style.visibility = "visible";
        console.log("wrong")
        setTimeout(red,3000)
    }
}