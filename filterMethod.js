// Task: Transform an Array of Objects

// You have an array of objects representing users, each with a name and age property.
// Your task is to create a new array that contains only the names of users who are 18 years old or older.

//   Here’s the initial array:

const users = [
  { name: 'Alice', age: 17 },
  { name: 'Bob', age: 22 },
  { name: 'Charlie', age: 16 },
  { name: 'David', age: 19 },
  { name: 'Eve', age: 20 }
];

const newArr = users.filter(item => item.age >= 18);
console.log(newArr)