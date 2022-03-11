//return account object with matching ID
function findAccountById(accounts, id) {
 return accounts.find((account) => account.id === id);
}


//returns sorted array of provided account objects that are sorted alphabetically by last name
function sortAccountsByLastName(accounts) {
  return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1));
}


//returns number that represents # of times account's ID appears in book's borrows array
function getTotalNumberOfBorrows(account, books) {
  //create a counter
  let sum = 0;
  //loop thru array of book objects
  for (let i=0; i<books.length; i++){
    //loop thru individual book objects, accessing the borrow's array
    for (let j=0; j<books[i].borrows.length; j++){
      //check if book borrows id = account id
      if (books[i].borrows[j].id === account.id){
        sum += 1;
  }
  }
}
  return sum;
 }

//returns array of book objects including author info,representing all books currently checked out by a given account 
//author obj is nested inside book obj

function getBooksPossessedByAccount(account, books, authors) {
  let borrowedBooks = books.filter((book) => {
  let doesBorrowedBookExist = book.borrows.some((borrow) => borrow.returned === false && borrow.id === account.id);
   return doesBorrowedBookExist === true;
  });
  return borrowedBooks.map((borrowedBook) => {
    let author = authors.find((author) => borrowedBook.authorId === author.id);
      return {...borrowedBook, author: author};
   });
//       console.log(possessedBooks);
}




//get books currently checked out by account
//add author info to list of books above




  
    
  


module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
