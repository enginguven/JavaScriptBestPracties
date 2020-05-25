/*const person = {
  FirstName: "Mark",
  LastName: "Phill",
};
person.__proto__.age = 25;
console.log(
  `First Name:${person.FirstName} Last Name:${person.LastName} Age:${person.age}`
);
*/
console.log("burada");
function Person() {
  this.FirstName = "Mark";
  this.LastName = "Phill";
}
Person.prototype.age = 24;
let person2 = new Person();
person2.__proto__.city = "Chicago";
console.log(
  `First Name:${person2.FirstName} Last Name:${person2.LastName} Age:${person2.age} City:${person2.city}`
);
