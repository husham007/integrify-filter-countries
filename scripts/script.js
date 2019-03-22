/*
  Countries filter script
  Author: Husham
  License: free to use
*/

import countries from "./countries.js";
import * as module from  "./functions.js";


export const startBtn = document.querySelector(".btn-start");
export const searchBtn = document.querySelector(".btn-search");
export const sortBtn = document.querySelector(".btn-sort");
export const resultElement = document.querySelector("#result");
export const input = document.querySelector("input");
export const countriesDiv = document.querySelector(".main-countries");


startBtn.addEventListener("click", module.btnListener);
searchBtn.addEventListener("click", module.btnListener);
sortBtn.addEventListener("click", module.sortBtnListener);
input.addEventListener("input", module.inputListener);

module.showCountries(countries);


