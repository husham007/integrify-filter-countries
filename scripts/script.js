/*
  Countries filter script
  Author: Husham
  License: free to use
*/


let countries = [
  'Afghanistan',
  'Albania',
  'Algeria',
  'Andorra',
  'Angola',
  'Antigua and Barbuda',
  'Argentina',
  'Armenia',
  'Australia',
  'Austria',
  'Azerbaijan',
  'Bahamas',
  'Bahrain',
  'Bangladesh',
  'Barbados',
  'Belarus',
  'Belgium',
  'Belize',
  'Benin',
  'Bhutan',
  'Bolivia',
  'Bosnia and Herzegovina',
  'Botswana',
  'Brazil',
  'Brunei',
  'Bulgaria',
  'Burkina Faso',
  'Burundi',
  'Cambodia',
  'Cameroon',
  'Canada',
  'Cape Verde',
  'Central African Republic',
  'Chad',
  'Chile',
  'China',
  'Colombi',
  'Comoros',
  'Congo (Brazzaville)',
  'Congo',
  'Costa Rica',
  "Cote d'Ivoire",
  'Croatia',
  'Cuba',
  'Cyprus',
  'Czech Republic',
  'Denmark',
  'Djibouti',
  'Dominica',
  'Dominican Republic',
  'East Timor (Timor Timur)',
  'Ecuador',
  'Egypt',
  'El Salvador',
  'Equatorial Guinea',
  'Eritrea',
  'Estonia',
  'Ethiopia',
  'Fiji',
  'Finland',
  'France',
  'Gabon',
  'Gambia, The',
  'Georgia',
  'Germany',
  'Ghana',
  'Greece',
  'Grenada',
  'Guatemala',
  'Guinea',
  'Guinea-Bissau',
  'Guyana',
  'Haiti',
  'Honduras',
  'Hungary',
  'Iceland',
  'India',
  'Indonesia',
  'Iran',
  'Iraq',
  'Ireland',
  'Israel',
  'Italy',
  'Jamaica',
  'Japan',
  'Jordan',
  'Kazakhstan',
  'Kenya',
  'Kiribati',
  'Korea, North',
  'Korea, South',
  'Kuwait',
  'Kyrgyzstan',
  'Laos',
  'Latvia',
  'Lebanon',
  'Lesotho',
  'Liberia',
  'Libya',
  'Liechtenstein',
  'Lithuania',
  'Luxembourg',
  'Macedonia',
  'Madagascar',
  'Malawi',
  'Malaysia',
  'Maldives',
  'Mali',
  'Malta',
  'Marshall Islands',
  'Mauritania',
  'Mauritius',
  'Mexico',
  'Micronesia',
  'Moldova',
  'Monaco',
  'Mongolia',
  'Morocco',
  'Mozambique',
  'Myanmar',
  'Namibia',
  'Nauru',
  'Nepal',
  'Netherlands',
  'New Zealand',
  'Nicaragua',
  'Niger',
  'Nigeria',
  'Norway',
  'Oman',
  'Pakistan',
  'Palau',
  'Panama',
  'Papua New Guinea',
  'Paraguay',
  'Peru',
  'Philippines',
  'Poland',
  'Portugal',
  'Qatar',
  'Romania',
  'Russia',
  'Rwanda',
  'Saint Kitts and Nevis',
  'Saint Lucia',
  'Saint Vincent',
  'Samoa',
  'San Marino',
  'Sao Tome and Principe',
  'Saudi Arabia',
  'Senegal',
  'Serbia and Montenegro',
  'Seychelles',
  'Sierra Leone',
  'Singapore',
  'Slovakia',
  'Slovenia',
  'Solomon Islands',
  'Somalia',
  'South Africa',
  'Spain',
  'Sri Lanka',
  'Sudan',
  'Suriname',
  'Swaziland',
  'Sweden',
  'Switzerland',
  'Syria',
  'Taiwan',
  'Tajikistan',
  'Tanzania',
  'Thailand',
  'Togo',
  'Tonga',
  'Trinidad and Tobago',
  'Tunisia',
  'Turkey',
  'Turkmenistan',
  'Tuvalu',
  'Uganda',
  'Ukraine',
  'United Arab Emirates',
  'United Kingdom',
  'United States',
  'Uruguay',
  'Uzbekistan',
  'Vanuatu',
  'Vatican City',
  'Venezuela',
  'Vietnam',
  'Yemen',
  'Zambia',
  'Zimbabwe',
];

const startBtn = document.querySelector('.btn-start');
const searchBtn = document.querySelector('.btn-search');
const sortBtn = document.querySelector('.btn-sort');
const resultElement = document.querySelector('#result');
const input = document.querySelector("input");
const countriesDiv = document.querySelector(".main-countries");
let startWithBtn = false;
let searchWithBtn = false;
let sortWithBtn = false;

startBtn.addEventListener('click', ()=>{
  resetFlags();
  startBtn.className = 'clicked-btn';
  startWithBtn = true;
});

searchBtn.addEventListener('click', ()=>{
  resetFlags();
  searchBtn.className = 'clicked-btn';
  searchWithBtn = true;
});

sortBtn.addEventListener('click', ()=>{
  resetFlags();
  sortBtn.className = 'clicked-btn';
  sortWithBtn = true;
  countries = countries.reverse();
  showCountries(countries);
});

input.addEventListener('input', ()=>{
  let result = [];
  if (startWithBtn){
   // console.log(input.value);
     result =  countries.filter(country=>{
      //console.log(country);
      //console.log(input.value);
      return country.toUpperCase().startsWith(input.value.toUpperCase());
    });
    //console.log(result);
    showCountries(result);
    
    resultElement.textContent = `Number of found Countries are: ${result.length}`;
  }

  if (searchWithBtn){
    // console.log(input.value);
      result =  countries.filter(country=>{
       //console.log(country);
       //console.log(input.value);
       return country.toUpperCase().includes(input.value.toUpperCase());
     });
     //console.log(result);
     showCountries(result);
     
     resultElement.textContent = `Number of found Countries are: ${result.length}`;
   }

   
  
})

const element = (elementType, textContent, className, color)=>{
  const element = document.createElement(elementType);
  element.textContent = textContent;
  element.className = className;
  element.style.background = color;
  return element;
}

const showCountries = (countries)=>{
  countriesDiv.innerHTML = '';
  countries.forEach(country => {
    let countryElement = element('div', country, 'country-div', randomHexaNumberGenerator());
    countriesDiv.appendChild(countryElement);

    
  });
}

showCountries(countries);

//console.log(btn);
/*
btn.addEventListener("click", e => {
  colors = [];
  
  for (let index = 0; index < input.value; index++) {
    let random = randomHexaNumberGenerator();
    //console.log(random);
    colors.push(random);  

  }
  //console.log(colors);
  showColors();
});
*/

function resetFlags(){
  startWithBtn = false;
  searchWithBtn = false;
  sortWithBtn = false;

  startBtn.className = 'btn';
  searchBtn.className = 'btn';
  sortBtn.className = 'btn';

  //showCountries(countries);
}
function randomHexaNumberGenerator() {
  var length = 6;
  var chars = "0123456789ABCDEF";
  var hex = "#";
  while (length--) hex += chars[(Math.random() * 16) | 0];
  return hex;
}





function showColors(){
  const mainColors = document.querySelector('.main-colors');
  mainColors.innerHTML = '';

  colors.forEach((color, i) => {
    let colorContainer =element('div', '', 'color-container', color);
    let colorDiv =element('div', '', 'color-div', color);
    let buttonDiv =element('div', '', 'button-div', color);
    let colorElement = element('span', color, 'color-element', color);
    let copyButtonElement = element('button', 'Copy', 'copy-button', '');

    

    copyButtonElement.addEventListener('click', (e)=>{
      try {
        
        var range = document.createRange() ;// create new range object
        range.selectNodeContents(colorElement); // set range to encompass desired element text
        var selection = window.getSelection(); // get Selection object from currently user selected text
        selection.removeAllRanges(); // unselect any user selected text (if any)
        selection.addRange(range) ;// add range to Selection object t;
      }
      catch(err) {
        console.log(err);
      }
      document.execCommand("copy");
    });

    
    colorDiv.appendChild(colorElement);
    buttonDiv.appendChild(copyButtonElement);
    colorContainer.appendChild(colorDiv);
    colorContainer.appendChild(buttonDiv);
    mainColors.appendChild(colorContainer);
    
  });
}
