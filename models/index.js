const {Client} = require('pg');
const Author = require('./Author')
const User = require('./User')
const Book = require('./Book')
const BookToUser = require('./BookToUser')

const config ={
    user: 'postgres',
    password: '9669',
    host: 'localhost',
    port: 5432,
    database: 'test'
}
const client = new Client(config);
    
Author._client = client;
Author._tableName = 'authors';

User._client = client;
User._tableName = 'users';

Book._client = client;
Book._tableName = 'book';

BookToUser._client = client;
BookToUser._tableName = 'books_to_users';


module.exports = {
    Author,
    User,
    Book,
    BookToUser,
    client
}