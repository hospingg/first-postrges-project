const API_BASE = 'https://randomuser.me/api/';

module.exports.getUsers = async() =>{
    const response = await fetch(`${API_BASE}?results=90&seed=library`)
    const data = await response.json();
    return data.results
}