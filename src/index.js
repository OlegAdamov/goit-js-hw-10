import './css/styles.css';
import {fetchCountries} from './fetchCountries';

const countryInput = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list')
const countryInfo = document.querySelector('.country-info')
var debounce = require('lodash.debounce');

import { Notify } from 'notiflix/build/notiflix-notify-aio';

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

fetchCountries(searchCountry)
    .then(renderCountry)
    .catch(onFetchError)
    .finally(() => form.reset());

}

function renderCountry(country) {
    const markup = countryList(country);
    countryInput.innerHTML.countryList = markup
}

    function onFetchError(error) {
alert('Упс, что-т пошло не так!')
    }
    
  
console.log('Promise:', fetchCountries());