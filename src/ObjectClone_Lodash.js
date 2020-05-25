import _ from "lodash";

let book = {
  isbn: 1,
  book_title: "Beginning Node.js",
  publish_date: "2018-04-23",
  PublishCount: 1,
  Author: {
    Name: "Basarat",
  },
};

let updatedBook = _.cloneDeep(book);
updatedBook.PublishCount++;
updatedBook.Author.Name = "Syed, Basarat";
console.log(book);
console.log(updatedBook);

//same way with underscore.js
