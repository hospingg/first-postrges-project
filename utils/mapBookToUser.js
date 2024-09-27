

function mapBookToUser(count) {
    let bookToUserArr = []; // Ініціалізуємо порожній масив
    for (let i = 0; i < count; i++) {
        bookToUserArr[i] = {
            book_id: Math.floor(Math.random() * 30) + 101, 
            user_id: (Math.random() < 0.7) ? Math.floor(Math.random() * 21) + 1 : null // Додані дужки
        };
    }

    return bookToUserArr.map(({ book_id, user_id }) => 
        `('${book_id}', ${user_id !== null ? `'${user_id}'` : 'NULL'})` // Якщо user_id = null, вставляємо 'NULL'
    ).join(',');
}


module.exports.mapBookToUser = mapBookToUser;