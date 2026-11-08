"use strict";

let numerolista = [];

let numero = prompt("anna numero tai 0 lopettaaksesi:");
while (numero != 0) {
    numerolista.push(numero);
    console.log("annettiin: " + numero);
    numero = prompt("anna numero tai 0 lopettaaksesi:");
}

numerolista.sort((a,b) => b-a); // suuruusjärjestys suurimmasta pienimpään

console.log("tulostetaan annetut numerot suuruusjärjestyksessä")

for (let i=0; i<numerolista.length; i++) {
    console.log(numerolista[i]);
}