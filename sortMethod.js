const sortArrayOfObjects = [
  {score: 40, name: 'John'},
  {score: 30, name: 'Julio'},
  {score: 50, name: 'Julian'},
  {score: 70, name: 'Rodrigo'},
]

const descendingOrder = sortArrayOfObjects.sort((a, b) => b.score - a.score)
console.log(descendingOrder)