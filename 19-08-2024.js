// Task: Create a Leaderboard
// You have an array of objects representing players and their scores in a game. 
// Your task is to create a leaderboard that ranks the players based on their scores in descending order. 
// Additionally, if two players have the same score, they should have the same rank.

// // Here’s the initial array:
// const players = [
//   { name: 'Alice', score: 50 },
//   { name: 'Bob', score: 70 },
//   { name: 'Charlie', score: 70 },
//   { name: 'David', score: 60 },
//   { name: 'Eve', score: 50 }
// ];

// // Steps:
// // Sort the players based on their scores in descending order.
// const leaderboard = players.sort((a, b) => b.score - a.score).map((item, index, array) => {
//   let rank;
//   if (index > 0 && array[index - 1].score === item.score) {
//     rank = array[index - 1].rank
//   } else {
//     rank = index + 1
//   }
//   return {
//     ...item,
//     rank: rank
//   }
// })

// console.log(leaderboard)

// Assign ranks to the players. Players with the same score should have the same rank.



