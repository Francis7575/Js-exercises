const numbers = [10, 15, 15, 20, 10]; // 70

// Using reduce to sum the numbers
// const sum = numbers.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 30); // The initial value of the accumulator is 0

// console.log(sum);


function sum(acc, curr) {
  return acc + curr;
}

const total = numbers.reduce(sum, 30);
console.log(total)
