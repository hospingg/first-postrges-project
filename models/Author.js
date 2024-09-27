const {mapAuthors} = require('../utils/mapAuthors')


class Author{
    static _client;
    static _tableName;


    static async findAuthors(){
        return this._client.query(`SELEST * FROM ${this._tableName};`)
    }
    static async bulkCreate(authors){
        const mapped = mapAuthors(authors);
        const prom = await this._client.query(`INSERT INTO ${this._tableName}(first_name, last_name, birthdate, email, phone_number) VALUES ${mapped};`)
        return prom;
    }
}

module.exports = Author;