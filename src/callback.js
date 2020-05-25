const person = {
  FirstName: "Mark",
  LastName: "Phill",
};
const callback = (data) => {
  console.log(data);
};
const doCall = (data, callback) => {
  setTimeout(() => {
    callback(data);
  }, 2000);
};
doCall(person, callback);
