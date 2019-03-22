// Supported Functions

//import {countriesDiv} from "./script.js";
import * as module from  "./script.js";
import countries from "./countries.js";

export const showCountries = countries => {
  module.countriesDiv.innerHTML = "";
  countries.forEach(country => {
    let countryElement = element(
      "div",
      country,
      "country-div",
      randomHexaNumberGenerator()
    );
    module.countriesDiv.appendChild(countryElement);
  });
};

export function btnListener(e) {
  reset();
  e.target.className = "clicked-btn";
  if (module.input.value !== null) {
    module.input.value = module.input.value;
    var event = new Event("input", {
      bubbles: true,
      cancelable: true
    });
    module.input.dispatchEvent(event);
  }
}

export function sortBtnListener(e) {
  reset();
  module.input.value = null;
  e.target.className = "clicked-btn";
  showCountries(countries.reverse());
}

export function inputListener() {
  if (validInputs()) {
    if (module.startBtn.className === "clicked-btn") {
      let result = countries.filter(country => {
        return country.toUpperCase().startsWith(module.input.value.toUpperCase());
      });
      showCountries(result);
      module.resultElement.className = "result-green";
      module.resultElement.textContent = `Number of found Countries are: ${
        result.length
      }`;
    } else if (module.searchBtn.className === "clicked-btn") {
      let result = countries.filter(country => {
        return country.toUpperCase().includes(module.input.value.toUpperCase());
      });
      showCountries(result);
      module.resultElement.className = "result-green";
      module.resultElement.textContent = `Number of found Countries are: ${
        result.length
      }`;
    }
  }
  else {
    showCountries(countries);
  }
}

 function validInputs() {
  if (!module.input.value) {
    module.resultElement.className = "result-green";
    module.resultElement.textContent = "Please Enter in the field to filter";
    return false;
  } else if (!module.input.value.match(/^[A-Za-z]+$/g)) {
    module.resultElement.className = "result-red";
    module.resultElement.textContent = "Only Alphabets dude!! :) ";
    return false;
  } else return true;
}

 const element = (elementType, textContent, className, color) => {
  const element = document.createElement(elementType);
  element.textContent = textContent;
  element.className = className;
  element.style.background = color;
  return element;
};



function reset() {
  module.startBtn.className = "btn";
  module.searchBtn.className = "btn";
  module.sortBtn.className = "btn";

  module.resultElement.textContent = null;
  module.resultElement.className = null;
}

function randomHexaNumberGenerator() {
  var length = 6;
  var chars = "0123456789ABCDEF";
  var hex = "#";
  while (length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}
