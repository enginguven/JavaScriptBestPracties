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

const fetchData = async () => {
  const data = await promise1;
  console.log(`Success:${JSON.stringify(data)}`);
};
fetchData();

//2--Error
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(person);
  }, 2000);
});
const fetchData2 = async () => {
  try {
    const data = await promise2;
    console.log(`Success:${JSON.stringify(data)}`);
  } catch (err) {
    console.log(`Error:${JSON.stringify(err)}`);
  }
};
fetchData2();
