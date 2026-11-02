"use strict";

const vastaus = confirm("lasketaanko neliöjuuri?");

if (vastaus === true) {
    const lukuStr = prompt("anna luku");
    const luku = parseFloat(lukuStr);
    if (luku >= 0) {
        let juuriluku = Math.sqrt(luku);
        document.querySelector("#laskettujuuriluku").innerHTML = juuriluku;
    } else if (luku < 0) {
        let juuriluku = ("Negatiivisen luvun neliöjuurta ei ole määritelty.");
        document.querySelector("#laskettujuuriluku").innerHTML = juuriluku;
    }
} else if (vastaus === false) {
    let juuriluku = "neliöjuurta ei lasketa";
    document.querySelector("#laskettujuuriluku").innerHTML = juuriluku;
}