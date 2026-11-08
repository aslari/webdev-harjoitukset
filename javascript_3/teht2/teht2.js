"use strict";

let osallistujat = prompt("kuinka monta osallistujaa");

let osallistujaluettelo = [];

//nimien lisäys listaan
for (let i=0; i<osallistujat; i++) {
    let nimi = prompt("anna nimi");
    osallistujaluettelo.push(nimi);

}

osallistujaluettelo.sort();

//nimien läpikäynti listaan
for (let i=0; i<osallistujaluettelo.length; i++) {
    let ol = document.querySelector('ol');
    let nimilisays = document.createElement('li');
    nimilisays.innerText = osallistujaluettelo[i];
    ol.appendChild(nimilisays);
}