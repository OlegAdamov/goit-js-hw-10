const BASE_URL = 'https://restcountries.com/v3.1';

function fetchCountries() {
    return fetch(`${BASE_URL}/all?fields=name.official,capital,population,flags,languages`)
        .then(response => {
            return response.json();
        });
}

export {
    fetchCountries
};

