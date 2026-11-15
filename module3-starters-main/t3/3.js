'use strict';
const names = ['John', 'Paul', 'Jones'];

let ul = document.querySelector('ul');

for (let i=0; i<names.length; i++) {
    let elementti = document.getElementById("target");
    elementti.innerHTML += "<li>" + names[i] + "</li>";    
}