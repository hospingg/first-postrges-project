const API_BASE = 'http://www.official-joke-api.appspot.com/jokes/random/';

module.exports.getBooks = async() =>{
    const response = await fetch(`${API_BASE}30`)
    const data = await response.json();
    return data
}