
function mapUsers(userArr){
    return userArr.map(({name:{first, last}, email, phone, location:{street, city, state, country}}) => 
        `('${first}', '${last}', '${email}', '${phone}', '${street.name} ${street.number}, ${city}, ${state}, ${country}')`
    ).join(',');
}

module.exports.mapUsers = mapUsers;