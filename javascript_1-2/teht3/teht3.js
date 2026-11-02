"use strict";

const luku1Str = prompt("anna luku 1");
const luku2Str = prompt("anna luku 2");
const luku3Str = prompt("anna luku 3");

const luku1 = parseFloat(luku1Str);
const luku2 = parseFloat(luku2Str);
const luku3 = parseFloat(luku3Str);

const summa = luku1 + luku2 + luku3;
const tulo = luku1 * luku2 * luku3;
const keskiarvo = tulo / 3;

document.querySelector("#summaus").innerHTML = summa;
document.querySelector("#tulolasku").innerHTML = tulo;
document.querySelector("#keskiarvolasku").innerHTML = keskiarvo;