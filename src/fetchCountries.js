const BASE_URL = 'https://restcountries.com/v3.1';


 function fetchCountries(nameCountry) {
     return fetch(`${BASE_URL}/name/${nameCountry}?fields=name,capital,population,flags,languages`)
         .then(response => {
             
             if (response.status !== 200) {
                 return Promise.reject(new Error())
             }
             return response.json();
         })
         .catch(error => {
             console.log(error);
         });
         
       
};

export {
    fetchCountries
};

// console.log(fetchCountries("peru"));