const BASE_URL = 'https://restcountries.com/v3.1';

fetchCountries = nameCountry => {
    return fetch(`${BASE_URL}/name/${nameCountry}?fields=name,capital,population,flags,languages`)
        .then(response => {
            return response.json();
        });
}

export {
    fetchCountries
};

