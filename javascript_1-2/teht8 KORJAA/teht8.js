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
        } else if (i % 4 === 0 && i % 100 === 0 && i % 400 !== 0) {
            return;
        } else {
            return;
        }
    }
}

karkausvuosilasku();

for (let i = 0; i <= karkausvuodet.length; i++) {
    console.log(karkausvuodet);
}

const ul = document.getElementsByTagName('ul')[0];
const vuosilisays = document.createElement('li');
for (let i=0; i<=karkausvuodet.length; i++) {
    vuosilisays.innerText = karkausvuodet[0];
    ul.appendChild(vuosilisays);
}
