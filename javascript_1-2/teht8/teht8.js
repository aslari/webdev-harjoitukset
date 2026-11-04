"use strict";

const kysyttyalkuvStr = prompt("anna alkuvuosi");
const kysyttyloppuvStr = prompt("anna loppuvuosi");

const kysyttyalkuvInt = parseFloat(kysyttyalkuvStr);
const kysyttyloppuvInt = parseFloat(kysyttyloppuvStr);

let karkausvuodet = [];

function karkausvuosilasku() {
    for (let i = kysyttyalkuvInt; i <= kysyttyloppuvInt; i++) {
        if (i % 4 === 0 && i % 100 !== 0) {
            karkausvuodet.push(i);
        } else if (i %4 === 0 && i % 100 === 0 && i % 400 === 0) {
            karkausvuodet.push(i);
        } else if (vuosiInt % 4 === 0 && vuosiInt % 100 === 0 && vuosiInt % 400 !== 0) {
            return;
        } else {
            return;
        }
    }
}

karkausvuosilasku();
console.log(karkausvuodet);

document.querySelector("#vuosi").innerHTML = vuosiInt;


