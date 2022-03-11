//return author object with matching ID
function findAuthorById(authors, id) {
  return authors.find((author) => id === author.id);
}

//returns book object that has matching ID
function findBookById(books, id) {
  return books.find((book) => id === book.id);
}

//returns array w 2 arrays in it
//1st array contains book objs that represent books currently checked out
//2nd array contains book onjs that represent books that have been returned
function partitionBooksByBorrowedStatus(books) {
  let returned = [];
  let out = [];
  for (let i=0; i<books.length; i++){
    if(books[i].borrows[0].returned === true){
     returned.push(books[i]);
    } else {
      out.push(books[i]);
    }
  }
  return [out, returned];
}


//return an array of 10 or less acc objs that rep acc given by ID of book's borrows array
//each acc obj should contain returned entry from corresponding borrows array
//books borrows array contains id and returned
//accounts array
//id from accounts array matches taht of the book
 
//want accounts with book borrows array nested inside
 function getBorrowersForBook(book, accounts) {
  let matchingAccounts = accounts.filter((account) => {
  let doesAccountMatch = book.borrows.some((borrow) => borrow.id === account.id);
   return doesAccountMatch === true;
  });
   //console.log(matchingAccounts);
  return matchingAccounts.map((matchingAccount) => {
    let borrowedInfo = book.borrows.find((borrowedInfo) => matchingAccount.id === borrowedInfo.id);
    console.log ({...matchingAccount, returned: borrowedInfo.returned});
      return {...matchingAccount, returned: borrowedInfo.returned};
   });
}



module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
