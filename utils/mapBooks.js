const { format, differenceInMilliseconds, addMilliseconds } = require('date-fns');


function mapBooks(bookArr){
    return bookArr.map(({setup}) => 
        `('${Math.floor(Math.random() * 21) + 1}', '${nameChecker(setup)}', '${Math.floor(Math.random() * 300)}','${getRandomDate(new Date(1998, 0, 1), new Date())}')`
    ).join(',');
}
function nameChecker(name){
    if (name.includes("'")) { 
        return name.replace(/'/g, '"'); 
    }
    return name;
}

function getRandomDate(startDate, endDate) {
  
    const diffInMs = differenceInMilliseconds(endDate, startDate);
    const randomMs = Math.floor(Math.random() * diffInMs);
  
    const randomDate = addMilliseconds(startDate, randomMs);
    
    return format(randomDate, 'yyyy-MM-dd');
  }
  

module.exports.mapBooks = mapBooks;