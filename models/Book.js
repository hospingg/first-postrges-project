const {mapBooks} = require('../utils/mapBooks')


class Book{
    static _client;
    static _tableName;


    static async findBooks(){
        return this._client.query(`SELEST * FROM ${this._tableName};`)
    }
    static async bulkCreate(books){
        const mapped = mapBooks(books);
        const quertText = `INSERT INTO ${this._tableName}(author_id, name, pages, public_date, user_id) VALUES ${mapped};`
        // console.log(quertText)
        const prom = await this._client.query(quertText)
        return prom;
    }
}


  

module.exports = Book;