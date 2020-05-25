//Author.Name will change in both vars
let book = {
  isbn: 1,
  book_title: "Beginning Node.js",
  publish_date: "2018-04-23",
  PublishCount: 1,
  Author: {
    Name: "Basarat",
  },
};

//Wrong
/*let updatedBook = Object.assign({}, book);
updatedBook.PublishCount++;
updatedBook.Author.Name = "Syed, Basarat";

console.log(book);
console.log(updatedBook);*/

//Correct
let updatedBook = JSON.parse(JSON.stringify(book));
updatedBook.PublishCount++;
updatedBook.Author.Name = "Syed, Basarat";
console.log(book);
console.log(updatedBook);
