const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const part = numbers.slice(2,5);
const part2 = numbers.splice(2,4, 55);
const part3 = numbers.join(" ");
console.log(part3);
console.log(part);
console.log(part2)