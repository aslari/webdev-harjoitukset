"use strict";

const heitotStr = prompt("montako kertaa noppaa heitetään?");
const heitot = parseInt(heitotStr);
document.querySelector("#annetutheitot").innerHTML = heitot;

let heittomaara = 0;
let noppasumma = 0;

while (heittomaara < heitot) {
    let tulos = Math.floor(Math.random() * (6-1+1)) + 1;
    console.log("heitettiin: " + tulos);
    heittomaara += 1;
    noppasumma = noppasumma + tulos;
}

document.querySelector("#summa").innerHTML = noppasumma;