"use strict";

// kysy ehdokkaiden lukumäärä
const ehdokkaat = prompt("anna ehdokkaiden lukumäärä:");
let ehdokastaulukko = {
    name: "",
    votes: 0,
};

// kysy ehdokkaiden nimet
for (let i=1; i<=ehdokkaat; i++) {
    let ehdokkaanNimi = prompt("anna ehdokkaan " + [i] + "nimi");
    let votes = 0;
    ehdokastaulukko.push(ehdokkaanNimi, votes);
}

for (let i=0; i<ehdokastaulukko.length; i++) {
    console.log(ehdokastaulukko[0]);
}
// tallenna ehdokkaiden nimi ja äänimäärän alkuarvo taulukkoon

// kysy äänestäjiem lukumäärä

// kysy vuorotellen jokaiselta äänestäjältä, ketä äänestää.
// äänestäjä syöttää ehdokkaan nimen.
// jos äänestäjä jättää nimen syöttämättä, ääni tulkitaan tyhjäksi.

// tulosta konsoliin voittajan nimi ja tulokset