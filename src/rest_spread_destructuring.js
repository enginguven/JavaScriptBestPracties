//1 Array Copy
let nums_v1 = [1, 2, 3];
let nums_v2 = [...nums_v1];
nums_v1.pop();
nums_v2.push(4);
nums_v2 = [...nums_v2, 5, 6];
console.log(nums_v1);
console.log(nums_v2);

//2 Array Rest
const nums_v3 = [1, 2, 3];
console.log(Math.max(...[...nums_v3, 4]));

//3 destructuring

const fullName = ["Mark", "Bulls", 30];
const [firstName, lastName, age] = fullName;
console.log(`First Name:${firstName} Last Name:${lastName} Age:${age}`);
