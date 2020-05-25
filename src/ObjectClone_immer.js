import { produce } from "immer";

let book = {
  isbn: 1,
  book_title: "Beginning Node.js",
  publish_date: "2018-04-23",
  PublishCount: 1,
};

function incrementPublishCount(book) {
  return produce(book, (draftBook) => {
    draftBook.PublishCount++;
  });
}

let updatedBook = incrementPublishCount(book);

console.log(book);
console.log(updatedBook);
