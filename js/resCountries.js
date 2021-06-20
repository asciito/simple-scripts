const { count } = require('console');
const https = require('https');

/**
 * Funcion para realizar una peticion y obtener los datos resultantes
 * 
 * @param {string} url URL donde se realizara la peticuo
 * @returns
 */
function makeRequest()
{
    const options = {
        'host': 'restcountries.eu',
        'path': '/rest/v2/all'
    }

    return new Promise((resolve, reject) => {
        https.get(options, res => {
            let data = '';

            if (res.statusCode >= 400) {
                return reject(new Error('Hubo un problema con la peticion'));
            }
            
            res.on('data', chunk => data += chunk);
            res.on('close', () => resolve(JSON.parse(data)));
        });
    });
}

(async () => {
    let countries = await makeRequest();

    countries.sort((a, b) => {
        if (a.population > b.population) return 1;
        if (a.population < b.population) return -1;
        return 0;
    });

    console.log(countries.length);
})();