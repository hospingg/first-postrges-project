const { format, differenceInMilliseconds, addMilliseconds } = require('date-fns');


function mapBooks(bookArr){
    return bookArr.map(({setup}) => 
        `(${randomId(0.7, 49)}, '${nameChecker(setup)}', '${Math.floor(Math.random() * 300)}','${getRandomDate(new Date(1998, 0, 1), new Date())}', ${randomId(0.3, 89)})`
    ).join(',');
}
function nameChecker(name){
    if (name.includes("'")) { 
        return name.replace(/'/g, '"'); 
    }
    return name;
}

function randomId(chance, count){
    const isTaken = Math.random() < chance;
    const id = isTaken ? Math.floor(Math.random() * count) + 1 : 'NULL';
    return id
}

function getRandomDate(startDate, endDate) {
  
    const diffInMs = differenceInMilliseconds(endDate, startDate);
    const randomMs = Math.floor(Math.random() * diffInMs);
  
    const randomDate = addMilliseconds(startDate, randomMs);
    
    return format(randomDate, 'yyyy-MM-dd');
}

module.exports.mapBooks = mapBooks;