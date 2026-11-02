"use strict";

const nimi = prompt("anna nimesi")
document.querySelector("#nimesi").innerHTML = nimi

function randomiser(max) {
    return Math.floor(Math.random() * max);
}

const tulos = randomiser(3);

const arvonta1 = {
    nimi: "Vohvelikko",
}

const arvonta2 = {
    nimi: "Huimainen",
}

const arvonta3 = {
    nimi: "Nuuskavuh",
}

const arvonta4 = {
    nimi: "Pertinkynsi",
}

if (tulos == 0) {
    const arvonta = arvonta1["nimi"];
    document.querySelector("#tuloksesi").innerHTML = arvonta;
} else if (tulos == 1) {
    const arvonta = arvonta2["nimi"];
    document.querySelector("#tuloksesi").innerHTML = arvonta;
} else if (tulos == 2) {
    const arvonta = arvonta3["nimi"];
    document.querySelector("#tuloksesi").innerHTML = arvonta;
} else if (tulos == 3) {
    const arvonta = arvonta4["nimi"];
    document.querySelector("#tuloksesi").innerHTML = arvonta;
}