import { Map } from "immutable";
let book = Map({
  isbn: 1,
  book_title: "Beginning Node.js",
  publish_date: "2018-04-23",
  PublishCount: 1,
});

function incrementPublishCount(book) {
  return book.set("PublishCount", book.get("PublishCount") + 1);
}

let updatedBook = incrementPublishCount(book);

console.log(book.toJS());
console.log(updatedBook.toJS());
