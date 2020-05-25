//1
(function () {
  console.log("IIFE called");
})();

//2
(() => {
  console.log("IIFE2 called");
})();

//3  async iife
const person = {
  FirstName: "Mark",
  LastName: "Phill",
};

let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(person);
  }, 1000);
});

(async () => {
  const data = await promise;
  console.log(`Success:${JSON.stringify(data)}`);
})();
