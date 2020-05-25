const person = {
  FirstName: "Mark",
  LastName: "Phill",
};
//1-Success
let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(person);
  }, 1000);
});
promise1.then((val) => console.log(`Success:${JSON.stringify(val)}`));

//2--Error
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(person);
  }, 2000);
});
promise2.then(
  (val) => console.log(`Success:${JSON.stringify(val)}`),
  (err) => console.log(console.log(`Error:${JSON.stringify(err)}`))
);
