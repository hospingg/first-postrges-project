const API_BASE = 'https://randomuser.me/api/';

module.exports.getAuthors = async() =>{
    const response = await fetch(`${API_BASE}?results=40`)
    const data = await response.json();
    return data.results
}