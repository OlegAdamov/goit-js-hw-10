import './css/styles.css';
import API from './fetchCountries';

const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')
var debounce = require('lodash.debounce');

// import Notiflix from 'notiflix'
const DEBOUNCE_DELAY = 300;

countryInput.addEventListener('input', debounce(onSearch, DEBOUNCE_DELAY));

export {
    fetchCountries
};

    
function onSearch(event) {
    event.preventDefault();
    const form = event.target;
    // console.log('form', form)
    const searchCountry = form.value.trim();
    console.log('searchCountry', searchCountry)

API.fetchCountries(searchCountry)
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
    

  
// function markup() {
//     fetchCountries.map(({ name, capital, population, flags, languages }) =>
//         `<h1><img src="${flags.svg}" alt="${name.official}" width="60" height="60">${name.official}</h1>
// <p>Capital: ${capital}</p>
//       <p>Population: ${population}</p>
//       <p>Languages: ${Object.values(languages)}</p>`,
//     )
//         // .join("");

// console.log('markup', markup)
// countryInfo.innerHTML = markup;
// }





// console.log('Promise:', API.fetchCountries());