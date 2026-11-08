"use strict";

function nopanheitto() {
    let heitto = Math.floor(Math.random() * 6) + 1;
    console.log("heitettiin: " + heitto);

    let ul = document.querySelector('ul');
    let heittolisays = document.createElement('li');
    heittolisays.innerText = heitto;
    ul.appendChild(heittolisays);
    return heitto;
}

let tulos = 0;
do {
    tulos = nopanheitto();
} while (tulos !== 6);