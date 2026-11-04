"use strict";

const heitotStr = prompt("montako kertaa noppaa heitetään?");
const heitot = parseInt(heitotStr);
document.querySelector("#annetutheitot").innerHTML = heitot;

function noppaheitto(min, max) {
    
    return Math.random() * (max - min) + min;
}

let heittomaara;
tulos = noppaheitto(1,6);
console.log(tulos);

do {
    heittomaara++;
    console.log(heittomaara);
} while (heittomaara < heitot);

document.querySelector("#summa").innerHTML = tulos;