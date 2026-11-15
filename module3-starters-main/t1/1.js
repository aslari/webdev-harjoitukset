"use strict";

const targetti = document.querySelector("#target");
const html = `<li>First item</li>
<li>Second item</li>
<li>Third item</li>`;
targetti.innerHTML = html;

//luodaan luokka my-list
const changelist = document.querySelector("#target");
changelist.setAttribute("id", "my-list");