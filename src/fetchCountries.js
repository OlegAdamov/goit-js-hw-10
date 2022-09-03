function fetchCountries() {
    return fetch('https://restcountries.com/v3.1/all?fields=name.official,capital,population,flags.svg,languages')
        .then(response => {
            return response.json();
        });
}

export {
    fetchCountries
};

