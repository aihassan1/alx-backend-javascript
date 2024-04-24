const numbers = [4, 9, 16, 25, 29];
let first = numbers.filter(myFunction);

function myFunction(value, index, array) {
  return value < 10;
}
console.log(first); // 0
