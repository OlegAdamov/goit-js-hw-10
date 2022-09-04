const BASE_URL = 'https://restcountries.com/v3.1';

export const fetchCountries = nameCountry => {
    return fetch(`${BASE_URL}/name/${nameCountry}?fields=name,capital,population,flags,languages`)
        .then(response => {
            return response.json();
        });
}



