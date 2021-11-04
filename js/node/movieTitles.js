const https   = require('https');
const baseUrl = 'https://jsonmock.hackerrank.com/api/movies/search/?Title=';

/**
 * Fetch the data using HTTPs module from NodeJS
 * 
 * @param {string} baseUrl The URL that we are going to fetch the data
 * @returns {Promise<Array>}
 */
function fetchData(baseUrl)
{
    let byteData = '';

    return new Promise(resolve => {
        https.get(baseUrl, res => {
            res.on('data', chunk => byteData += chunk);
            res.on('end', () => resolve(JSON.parse(byteData)));
        });
    })
}

/**
 * The main function to execute
 * 
 * @param {strig} substr The keyword to search for in the movies
 */
async function main(substr)
{
    let res     = await fetchData(baseUrl + substr);
    let movies  = res.data;
    let output  = '';
    let total_pages = res.total_pages;

    // The rest of the movies if there's more pages
    for (let page = 2; page <= total_pages; page++) {
        let newMovies = await fetchData(`${baseUrl}&page=${page}`);
        movies        = [ ...movies, ...newMovies.data ];
    }

    movies.sort((a, b) => {
        if (a.Title > b.Title) return 1;
        if (a.Title < b.Title) return -1;
        return 0;
    });

    movies.forEach(movie => output += movie.Title + '\n');
    console.log(output);
}

main('movie');
