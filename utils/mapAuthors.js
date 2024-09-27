// const result = await client.query("INSERT INTO authors(first_name, last_name, birthdate) VALUES ('Jane', 'Williams', '12-12-1995') ")

function mapAuthors(authorArr){
    const str =  authorArr.map(({name:{first, last}, dob:{date}, email, phone}) => 
        `('${first}', '${last}', '${date}', '${email}', '${phone}')`
    ).join(',');
    return str
}

module.exports.mapAuthors = mapAuthors;