// Original nested array
const nestedArray = [[1, 2, 3], [4, 5, 6], [1, 2, 7], [8, 9, [10, 11, [12, 13]]]];

// Flatten the array and remove duplicates
const flattenedArray = [
  // Create a new Set from the flattened array
  ...new Set(
    // Flatten the nested array to any depth
    nestedArray.flat(Infinity)
  )
];

// Log the result
console.log(flattenedArray);