
const {getAuthors} = require('./api/getAuthors');
const {getUsers} = require('./api/getUsers');
const {getBooks} = require('./api/getBooks');
const {Author, User, Book, BookToUser, client} = require('./models')

async function start() {

    await client.connect();

    // const authorsArr = await getAuthors()
    // const authorsResult = await Author.bulkCreate(authorsArr);

    // const usersArr = await getUsers()
    // // console.log(usersArr)
    // const usersResult = await User.bulkCreate(usersArr);

    // const booksArr = await getBooks()
    // const result = await Book.bulkCreate(booksArr);

    // const result = await BookToUser.bulkCreate();

    await client.end();
}

start();

