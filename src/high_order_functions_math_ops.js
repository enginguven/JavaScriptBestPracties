const doOps = (ops, num1, num2) => ops(num1, num2);

//1
const add = (num1, num2) => num1 + num2;
const multipy = (num1, num2) => num1 * num2;
const subtract = (num1, num2) => num1 - num2;
const division = (num1, num2) => num1 / num2;

console.log(doOps(add, 10, 5));
console.log(doOps(multipy, 10, 5));
console.log(doOps(subtract, 10, 5));
console.log(doOps(division, 10, 5));

//2
console.log(doOps((num1, num2) => num1 + num2, 10, 5));
console.log(doOps((num1, num2) => num1 * num2, 10, 5));
console.log(doOps((num1, num2) => num1 - num2, 10, 5));
console.log(doOps((num1, num2) => num1 / num2, 10, 5));
