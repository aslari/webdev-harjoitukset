"use strict";

const ul = document.querySelector('ul');
const ekalisays = document.createElement('li');
const tokalisays = document.createElement('li');
const kolmaslisays = document.createElement('li');

ekalisays.innerText = 'First item';
tokalisays.innerText = 'Second item';
kolmaslisays.innerText = 'Third item';

ul.appendChild(ekalisays);
ul.appendChild(tokalisays);
ul.appendChild(kolmaslisays);

//luodaan luokka my-list
const changelist = document.querySelector("#target");
changelist.setAttribute("id", "my-list");