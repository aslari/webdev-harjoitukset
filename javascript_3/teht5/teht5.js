"use strict";

let numerolista = [];

let numero = prompt("anna numero:");
while (!numerolista.includes(numero)) { // ! -> negaatio lauseelle
    numerolista.push(numero);
    console.log("annettiin: " + numero);
    numero = prompt("anna numero tai uudelleensyötä lopettaaksesi:");
}

if (numerolista.includes(numero)) {
    console.log("uudelleenannettu numero. lopetetaan toiminto")
}

numerolista.sort((a,b) => a-b); // suuruusjärjestys

console.log("tulostetaan annetut numerot suuruusjärjestyksessä")

for (let i=0; i<numerolista.length; i++) {
    console.log(numerolista[i]);
}