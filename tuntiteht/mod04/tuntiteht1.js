"use strict";

let timerID = null;
const pageHeight = document.documentElement.clientHeight;
console.log(pageHeight);

function startMakingBoxes() {
    console.log("Start making boxes..");
    timerID = setInterval(timedAction, 2000);
}

function stopMakingBoxes() {
    console.log("Stopping boxes...");
    clearInterval(timerID);
}

function deleteBox(evt) {
    //haetaan boxin parent-elementti
    let parentDiv = evt.currentTarget.parentElement;

    //poistetaan boxi DOMista
    parentDiv.removeChild(evt.currentTarget);
}

function timedAction() {
    //game over
    let boxDiv = document.querySelector(".box");

    //tee uusi tekstielementti
    let newPara = document.createElement("p");
    newPara.textContent = "Am I a box????";
    newPara.className = "div-green";
    newPara.setAttribute("class", "div-blue");
    newPara.addEventListener("click", deleteBox);

    //lisää uusi elementti div:in lapseksi
    boxDiv.appendChild(newPara);

    while (startMakingBoxes = true) {
        if (pageHeight < offsetHeight) {
            stopMakingBoxes();
            //poista olemassaolevat paragraphit

        }
    }
}

function checkGameOver {
    let paras = document.getElementsByClassName("div-green");
    for (let para of paras) {
        paraBottom = document.documentElement.offsetHeight;
        if (pageHeight <= paraBottom);
            let parentDiv = para.parentElement;
            clearInterval(timerID);
            return true;
    }
    return false;
}


console.log(window);

let startButton = document.getElementById("start");
startButton.addEventListener("click", startMakingBoxes);

let stopButton = document.getElementById("stop");
stopButton.addEventListener("click", stopMakingBoxes);

let heading = document.querySelector("#main-heading");
console.log(heading);

let heading2 = document.getElementById("main-heading");
console.log(heading2);

let paragraphs = document.querySelectorAll("p");
console.log(paragraphs);

let paragraphs2 = document.getElementsByTagName("p");
console.log(paragraphs2);

let paraHTML = "<p>I am a box!!!!!! 🤯</p>";
boxDiv.innerHTML = paraHTML;