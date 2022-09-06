import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';


const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;



countryInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

    
function onSearch(event) {
    event.preventDefault();
    nameCountry = event.target.value.trim();
    resetMarkup();
    fetchCountries(nameCountry)
        .then(countries => {
            if (countries.length > 10) {
                Notiflix.Notify.info('Too many matches found. Please enter a more specific name.')
            };
            renderCountry(countries)
        })
        .catch(error => {
            Notiflix.Notify.failure('Oops, there is no country with that name');
            resetMarkup(countryList);
            resetMarkup(countryInfo);
        })
};

function renderCountry(countries){
     if(countries.length >= 2 && countries.length <= 10) {
    resetMarkup(countryList)
    const list = createCountryList(countries);
countryList.innerHTML = list
    } else if
        (countries.length === 1) {
    resetMarkup(countryInfo)
    const info = creatCountryInfo(countries)
countryInfo.innerHTML = info
    };
};

function createCountryList(countries) {
    return countries.map(({ name, flags }) =>
        `<li class = "item"><img src="${flags.svg}" alt"${name.official}" width="60" height="30" clall = item-img>  ${name.official}</li>`)
        .join("");
};
    
  
function creatCountryInfo(countries) {
   return countries.map(({ name, capital, population, flags, languages }) =>
        `<h1><img src="${flags.svg}" alt="${name.official}" width="60" height="30">   ${name.official}</h1>
<p>Capital: ${capital}</p>
      <p>Population: ${population}</p>
      <p>Languages: ${Object.values(languages)}</p>`,
    )
        .join("");
};


function resetMarkup() {
    countryList.innerHTML = '';
    countryInfo.innerHTML = '';
};
