"use strict";

const appName = "(top) calculator";

document.title = appName.slice(5).toUpperCase();

const titleElement = document.querySelector("#js-s-t-s");
const siteTileRefElement = document.querySelector(".js-site-title-ref");

titleElement.innerHTML = appName;
siteTileRefElement.innerHTML = appName.slice(5);

let display = document.getElementById('js-display');
let buttons = document.querySelectorAll('button');

let output = '';
const buttonArray = Array.from(buttons);

buttonArray.forEach(button => {
    button.addEventListener('click', (e) => {
        if(e.target.innerHTML === '='){
            output = eval(output);
            display.value = output;
        }else if(e.target.innerHTML === 'AC'){
            output = '';
            display.value = output;
        }else if(e.target.innerHTML === 'DE'){
            output = output.slice(0, -1);
            display.value = output;
        }else{
            output += e.target.innerHTML;
            display.value = output;
        };
    })
});