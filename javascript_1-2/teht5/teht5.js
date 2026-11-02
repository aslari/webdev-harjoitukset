"use strict";

const vuosiStr = prompt("anna vuosiluku");
const vuosiInt = parseFloat(vuosiStr);
document.querySelector("#vuosi").innerHTML = vuosiInt;

if (vuosiInt % 4 === 0 && vuosiInt % 100 !== 0) {
    let tulos = ("on karkausvuosi");
    document.querySelector("#vuositulos").innerHTML = tulos;
} else if (vuosiInt %4 === 0 && vuosiInt % 100 === 0 && vuosiInt % 400 === 0) {
    let tulos = ("on karkausvuosi");
    document.querySelector("#vuositulos").innerHTML = tulos;
} else if (vuosiInt % 4 === 0 && vuosiInt % 100 === 0 && vuosiInt % 400 !== 0) {
    let tulos = ("ei ole karkausvuosi");
    document.querySelector("#vuositulos").innerHTML = tulos;
} else {
    let tulos = ("ei ole karkausvuosi");
    document.querySelector("#vuositulos").innerHTML = tulos;
}