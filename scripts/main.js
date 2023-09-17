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