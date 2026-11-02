"use strict";

const nimet = [];

for (let i = 0; i < 5; i++) {
    const nimi = prompt("anna nimi");
    nimet.push(nimi);
    document.querySelector("#nimet").innerHTML = nimet;
}

for (let i = 0; i < nimet.length; i++) {
    console.log(`Nimi: ${nimet[i]}`);
}

let vikanimi = nimet[nimet.length-1];
document.querySelector("#vikanimi").innerHTML = vikanimi;
nimet.sort();
let ekajarjestys = nimet[0];
document.querySelector("#ekajarjestys").innerHTML = ekajarjestys;
nimet.shift();
let ekanimi = nimet[0];
document.querySelector("#ekanimi").innerHTML = ekanimi