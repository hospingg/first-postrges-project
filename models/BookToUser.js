
const {mapBookToUser} = require('../utils/mapBookToUser')
class BookToUser{
    static _client;
    static _tableName;

    static async findBooks(){
        return this._client.query(`SELEST * FROM ${this._tableName};`)
    }
    static async bulkCreate(){
        const mapped = mapBookToUser(50);
        const quertText = `INSERT INTO ${this._tableName}(book_id, user_id) VALUES ${mapped};`
        console.log(quertText)
        const prom = await this._client.query(quertText)
        return prom;
    }
}

module.exports = BookToUser;