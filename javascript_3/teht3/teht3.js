"use strict";

const koiramaara = 6;

let koiraluettelo = [];

//nimien lisäys listaan
for (let i=0; i<koiramaara; i++) {
    let nimi = prompt("anna koiran nimi");
    koiraluettelo.push(nimi);

}

koiraluettelo.sort();
koiraluettelo.reverse();

//nimien läpikäynti listaan
for (let i=0; i<koiraluettelo.length; i++) {
    let ol = document.querySelector('ol');
    let koiralisays = document.createElement('ul');
    koiralisays.innerText = koiraluettelo[i];
    ol.appendChild(koiralisays);
}