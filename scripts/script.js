/*
  Countries filter script
  Author: Husham
  License: free to use
*/

import { countries } from "./countries.js";


const startBtn = document.querySelector(".btn-start");
const searchBtn = document.querySelector(".btn-search");
const sortBtn = document.querySelector(".btn-sort");
const resultElement = document.querySelector("#result");
const input = document.querySelector("input");
const countriesDiv = document.querySelector(".main-countries");
let startWithBtn = false;
let searchWithBtn = false;
let sortWithBtn = false;

startBtn.addEventListener("click", () => {
  resetFlags();
  startBtn.className = "clicked-btn";
  startWithBtn = true;
  if (input.value !== null) {
    input.value = input.value;
    var event = new Event("input", {
      bubbles: true,
      cancelable: true
    });

    input.dispatchEvent(event);
  }
});

searchBtn.addEventListener("click", () => {
  resetFlags();
  searchBtn.className = "clicked-btn";
  searchWithBtn = true;
  if (input.value !== null) {
    input.value = input.value;
    var event = new Event("input", {
      bubbles: true,
      cancelable: true
    });

    input.dispatchEvent(event);
  }
});

sortBtn.addEventListener("click", () => {
  resetFlags();
  input.value = null;
  sortBtn.className = "clicked-btn";
  sortWithBtn = true;
  showCountries(countries.reverse());
});

input.addEventListener("input", () => {
  let result = [];
  if (startWithBtn && validInputs()) {
    result = countries.filter(country => {
      return country.toUpperCase().startsWith(input.value.toUpperCase());
    });

    showCountries(result);
    resultElement.className = "result-green";
    resultElement.textContent = `Number of found Countries are: ${
      result.length
    }`;
  }

  if (searchWithBtn && validInputs()) {
    result = countries.filter(country => {
      return country.toUpperCase().includes(input.value.toUpperCase());
    });

    showCountries(result);
    resultElement.className = "result-green";
    resultElement.textContent = `Number of found Countries are: ${
      result.length
    }`;
  }
});

function validInputs() {
  if (!input.value) {
    resultElement.className = "result-green";
    resultElement.textContent = "Please Enter in the field to filter";
    return false;
  } else if (!input.value.match(/^[A-Za-z]+$/g)) {
    resultElement.className = "result-red";
    resultElement.textContent = "Only Alphabets dude!! :) ";
    return false;
  } else return true;
}

const element = (elementType, textContent, className, color) => {
  const element = document.createElement(elementType);
  element.textContent = textContent;
  element.className = className;
  element.style.background = color;
  //console.log('#7F'+ String(color).slice(1, 7));
  //element.style.color = '#7F'+ String(color).slice(1, 7);
  //element.style.color = '#'+invertHex(String(color).slice(1, 7));
  return element;
};

function invertHex(hex) {
  return (Number(`0x1${hex}`) ^ 0xFFFFFF).toString(16).substr(1).toUpperCase();
}



const showCountries = countries => {
  countriesDiv.innerHTML = "";
  countries.forEach(country => {
    let countryElement = element(
      "div",
      country,
      "country-div",
      randomHexaNumberGenerator()
    );
    countriesDiv.appendChild(countryElement);
  });
};

showCountries(countries);

function resetFlags() {
  startWithBtn = false;
  searchWithBtn = false;
  sortWithBtn = false;

  startBtn.className = "btn";
  searchBtn.className = "btn";
  sortBtn.className = "btn";

  resultElement.textContent = null;
  resultElement.className = null;
}

function randomHexaNumberGenerator() {
  var length = 6;
  var chars = "0123456789ABCDEF";
  var hex = "#";
  while (length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}
