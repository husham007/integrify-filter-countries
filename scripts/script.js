/*
  Countries filter script
  Author: Husham
  License: free to use
*/

let countries = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Antigua and Barbuda",
  "Argentina",
  "Armenia",
  "Australia",
  "Austria",
  "Azerbaijan",
  "Bahamas",
  "Bahrain",
  "Bangladesh",
  "Barbados",
  "Belarus",
  "Belgium",
  "Belize",
  "Benin",
  "Bhutan",
  "Bolivia",
  "Bosnia and Herzegovina",
  "Botswana",
  "Brazil",
  "Brunei",
  "Bulgaria",
  "Burkina Faso",
  "Burundi",
  "Cambodia",
  "Cameroon",
  "Canada",
  "Cape Verde",
  "Central African Republic",
  "Chad",
  "Chile",
  "China",
  "Colombi",
  "Comoros",
  "Congo (Brazzaville)",
  "Congo",
  "Costa Rica",
  "Cote d'Ivoire",
  "Croatia",
  "Cuba",
  "Cyprus",
  "Czech Republic",
  "Denmark",
  "Djibouti",
  "Dominica",
  "Dominican Republic",
  "East Timor (Timor Timur)",
  "Ecuador",
  "Egypt",
  "El Salvador",
  "Equatorial Guinea",
  "Eritrea",
  "Estonia",
  "Ethiopia",
  "Fiji",
  "Finland",
  "France",
  "Gabon",
  "Gambia, The",
  "Georgia",
  "Germany",
  "Ghana",
  "Greece",
  "Grenada",
  "Guatemala",
  "Guinea",
  "Guinea-Bissau",
  "Guyana",
  "Haiti",
  "Honduras",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Iraq",
  "Ireland",
  "Israel",
  "Italy",
  "Jamaica",
  "Japan",
  "Jordan",
  "Kazakhstan",
  "Kenya",
  "Kiribati",
  "Korea, North",
  "Korea, South",
  "Kuwait",
  "Kyrgyzstan",
  "Laos",
  "Latvia",
  "Lebanon",
  "Lesotho",
  "Liberia",
  "Libya",
  "Liechtenstein",
  "Lithuania",
  "Luxembourg",
  "Macedonia",
  "Madagascar",
  "Malawi",
  "Malaysia",
  "Maldives",
  "Mali",
  "Malta",
  "Marshall Islands",
  "Mauritania",
  "Mauritius",
  "Mexico",
  "Micronesia",
  "Moldova",
  "Monaco",
  "Mongolia",
  "Morocco",
  "Mozambique",
  "Myanmar",
  "Namibia",
  "Nauru",
  "Nepal",
  "Netherlands",
  "New Zealand",
  "Nicaragua",
  "Niger",
  "Nigeria",
  "Norway",
  "Oman",
  "Pakistan",
  "Palau",
  "Panama",
  "Papua New Guinea",
  "Paraguay",
  "Peru",
  "Philippines",
  "Poland",
  "Portugal",
  "Qatar",
  "Romania",
  "Russia",
  "Rwanda",
  "Saint Kitts and Nevis",
  "Saint Lucia",
  "Saint Vincent",
  "Samoa",
  "San Marino",
  "Sao Tome and Principe",
  "Saudi Arabia",
  "Senegal",
  "Serbia and Montenegro",
  "Seychelles",
  "Sierra Leone",
  "Singapore",
  "Slovakia",
  "Slovenia",
  "Solomon Islands",
  "Somalia",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sudan",
  "Suriname",
  "Swaziland",
  "Sweden",
  "Switzerland",
  "Syria",
  "Taiwan",
  "Tajikistan",
  "Tanzania",
  "Thailand",
  "Togo",
  "Tonga",
  "Trinidad and Tobago",
  "Tunisia",
  "Turkey",
  "Turkmenistan",
  "Tuvalu",
  "Uganda",
  "Ukraine",
  "United Arab Emirates",
  "United Kingdom",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vanuatu",
  "Vatican City",
  "Venezuela",
  "Vietnam",
  "Yemen",
  "Zambia",
  "Zimbabwe"
];

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
  return element;
};

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
