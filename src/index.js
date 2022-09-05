import './css/styles.css';
import {fetchCountries} from './fetchCountries';
import Notiflix from 'notiflix'


const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')
var debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

countryInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

    
function onSearch(event) {
    event.preventDefault();
    const form = event.target;
    // console.log('form', form)
    const nameCountry = form.value.trim();
    console.log('nameCountry', nameCountry)






fetchCountries("searchCountry")
    .then(renderCountry)
    .catch(onFetchError)
    // .finally(() => form.reset());

}

function renderCountry(country) {
    const markup = countryList(country);
    countryInput.innerHTML.countryList = markup;
    console.log('countryInput', countryInput)
}

function onFetchError(error) {
    // resetMarkup(reset.markup)
    return Notiflix.Notify.failure('Oops, there is no country with that name')
}
    

  
function markup() {
   return fetchCountries.map(({ name, capital, population, flags, languages }) =>
        `<h1><img src="${flags.svg}" alt="${name.official}" width="60" height="60">${name.official}</h1>
<p>Capital: ${capital}</p>
      <p>Population: ${population}</p>
      <p>Languages: ${Object.values(languages)}</p>`,
    )
        .join("");

console.log('markup', markup)
countryInfo.innerHTML = markup;
}





// console.log(fetchCountries("uk"));