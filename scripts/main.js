"use strict";

const appName = "t-o-p calculator";

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

console.log(operate(variableA, variableB, operand));


