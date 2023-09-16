"use strict";

const appName = "(top) calculator";

document.title = appName.toUpperCase();

const titleElement = document.querySelector("#js-s-t-s");
const siteTileRefElement = document.querySelector(".js-site-title-ref");

titleElement.innerHTML = appName;
siteTileRefElement.innerHTML = appName;

/*

TODO    PSEUDOCODE
*   Start by creating functions for add, subtract, multiply & divide.
*   Create the variables for the operation.
*   Create a function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
*   Create the functions that populate the display when you click the number buttons.

*/

let variableA = 3;
let variableB = 5;
let operand = "/";

const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (inputX, inputY, condition) => {

    let output = "";

    if(condition === "+"){
        output = add(inputX, inputY);
    }else if(condition === "-"){
        output = subtract(inputX, inputY);
    }else if(condition === "*"){
        output = multiply(inputX, inputY);
    }else if(condition === "/"){
        output = divide(inputX, inputY);
    };

    return output;
};

const operationChoiceElement = document.querySelectorAll('.js-operate-btn');
const canvasElement = document.querySelector('.js-canvas-text');

operationChoiceElement.forEach(value => value.addEventListener('click', () => {
    let className = value.classList[1];
    let currentMemory;
    let constantMemory = '';
    if(className === 'key-one'){
        currentMemory = 1;
        constantMemory.concat(String(currentMemory));
    }else if(className === 'key-two'){
        currentMemory = 2;
        constantMemory.concat(String(currentMemory));
    };
    canvasElement.textContent = constantMemory;
}));

// const operationChoiceElement = document.querySelectorAll('.js-operate-btn');
// const canvasElement = document.querySelector('.js-canvas-text');

// const checkEvent = (value) => {
//     value.addEventListener('click', () => {
//         let intLength = '';
//         let entry = 0;
//         let btnClass = value.classList[1];

//         if(btnClass === 'key-one'){
//             entry = 1;
//         }else if(btnClass === 'key-two'){
//             entry = 2;
//         }else if(btnClass === 'key-three'){
//             entry = 3;
//         }else if(btnClass === 'key-four'){
//             entry = 4;
//         }else if(btnClass === 'key-five'){
//             entry = 5;
//         }else if(btnClass === 'key-six'){
//             entry = 6;
//         }else if(btnClass === 'key-seven'){
//             entry = 7;
//         }else if(btnClass === 'key-eight'){
//             entry = 8;
//         }else if(btnClass === 'key-nine'){
//             entry = 9;
//         }else if(btnClass === 'key-zero'){
//             entry = 0;
//         };

//         intLength += entry;

//         canvasElement.textContent = intLength;
//     });
// }

// operationChoiceElement.forEach(checkEvent);


