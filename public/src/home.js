//return total # of books
function getTotalBooksCount(books) {
  let sum = 0;
  books.forEach(book => sum += 1);
  return sum;
}

//return # that represents # of account objects in array
function getTotalAccountsCount(accounts) {
  let sum = 0;
  accounts.forEach(account => sum += 1);
  return sum;
}

//return # that represents # of books that are currently checked out
function getBooksBorrowedCount(books) {
  let sum = 0;
  for (let i=0; i<books.length; i++){
    if (books[i].borrows[0].returned === false){
      sum += 1;
    }
  }
  return sum;
}

//returns array containing 5 objs or fewer that represents most common occuring genres, ordered from most common to least
//even if there is tie, array should contain no more than 5 obj
function getMostCommonGenres(books) {
  let results = [];
  for (let book of books){
    //console.log(book.genre);
    let genre = results.find((result) => result.name === book.genre);
    if (genre) {
      genre.count++;
    } else {
      let result = {name: book.genre, count: 1};
      results.push(result);
    }
  }
  //sort count and use splice/slice to take the 1st 5 items
  results.sort((genreA, genreB) => (genreA.count > genreB.count ? -1 : 1));
  results.splice(5);
  console.log(results);
  return results;
}


function getMostPopularBooks(books) {
  let results = [];
for (let book of books){
  let result = { name: book.title, count: book.borrows.length };
    results.push(result);
  }
  results.sort((titleA, titleB) => titleA.count > titleB.count ? -1 : 1);
  results.splice(5);
  console.log(results);
  return results;
}






function getMostPopularAuthors(books, authors) {
  let results = [];
  for (let author of authors){
    let authorName = `${author.name.first} ${author.name.last}`;
    
    //create accumulator
    let bookCount = 0;
    for (let book of books){   
     //check if book author = authorName
      if (author.id === book.authorId){
        //if match, add borrows length to accumulator
        bookCount += book.borrows.length;
      }
    }
    let result = { name: authorName, count: bookCount };
    results.push(result);
  }
  results.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1);
  results.splice(5);
  console.log(results);
  return results;
}



function getMostPopularAuthors(books, authors) {
  let results = [];
  for (let { id, name } of authors){
    let authorName = `${name.first} ${name.last}`;
    
    //create accumulator
    let bookCount = 0;
    for (let { authorId, borrows } of books){   
     //check if book author = authorName
      if (id === authorId){
        //if match, add borrows length to accumulator
        bookCount += borrows.length;
      }
    }
    let result = { name: authorName, count: bookCount };
    results.push(result);
  }
  results.sort((authorA, authorB) => authorA.count > authorB.count ? -1 : 1);
  results.splice(5);
  console.log(results);
  return results;
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
