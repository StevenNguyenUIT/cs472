// test data
let libraryBooks = [
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 1235 },
    { title: "Walter Isaacson", author: "Steve Jobs", libraryID: 4268 },
    { title: "The Road Ahead", author: "Bill Gates", libraryID: 4268 },
    { title: "Mockingjay: The Final Book of The Hunger Games", author: "Suzanne Collins", libraryID: 3257 }
];
   

/* addBook, which will take title, author, and libraryID as inputs. It will create a new book object and add it
to the library, which will be represented as an array named libraryBooks. addBook should return the newly
created book. */
function addBook(title, author, ID) {
    let newBook = {title: title, author: author, libraryID: ID};
    libraryBooks.push(newBook);
    return newBook;
}

/* getTitles, which will return all the book titles in libraryBooks in an alphabetically ordered array. */
function getTitles() {
    return libraryBooks.map(e => e.title).sort();
}

/* findBooks, which will take the keyword of title as input. It will find books which contain the given
keyword in the title and return books alphabetically ordered by the author. */

function findBooks(keyword) {  
    return libraryBooks.filter(e => e.title.toLowerCase().includes(keyword.toLowerCase())).sort((a,b) => a.author.localeCompare(b.author));
}
    


