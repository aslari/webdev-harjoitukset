"use strict";

let luvut = [];
const luku1 = prompt("anna 1. luku");
luvut.push(luku1);
const luku2 = prompt("anna 2.luku");
luvut.push(luku2);
const luku3 = prompt("anna 3.luku");
luvut.push(luku3);
const luku4 = prompt("anna 4.luku");
luvut.push(luku4);
const luku5 = prompt("anna 5.luku");
luvut.push(luku5);

for (let i = luvut.length; i >= 0; i--) {
    console.log(luvut[i]);
}