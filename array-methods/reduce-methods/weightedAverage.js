// // Sample data: Array of grades with scores and weights
// const grades = [
//   { score: 90, weight: 0.4 },
//   { score: 85, weight: 0.6 },
// ]

// // Function to calculate the weighted average
// function calculateWeightedAverage(grades) {
//   // Sum up the products of scores and weights using reduce()
//   const totalScore = grades.reduce(
//     (sum, grade) => sum + grade.score * grade.weight,
//     0
//   )

//   // Sum up the total weight
//   const totalWeight = grades.reduce((sum, grade) => sum + grade.weight, 0)

//   // Calculate the weighted average
//   return totalScore / totalWeight
// }

// // Testing the function
// const weightedAvg = calculateWeightedAverage(grades)
// console.log('Weighted Average:', weightedAvg.toFixed(0)) // Output: Weighted Average: 87
// Sample data: Array of grades with scores and weights
const grades = [
  { score: 90, weight: 0.4 },
  { score: 85, weight: 0.6 },
]

// Function to calculate the weighted average using loops
function calculateWeightedAverage(grades) {
  // Initialize variables for summing scores and weights
  let totalScore = 0
  let totalWeight = 0

  // Loop through each grade in the grades array
  for (let i = 0; i < grades.length; i++) {
    // Multiply each score by its weight and add it to the total score
    totalScore += grades[i].score * grades[i].weight

    // Add each weight to the total weight
    totalWeight += grades[i].weight
  }

  // Calculate the weighted average
  return totalScore / totalWeight
}

// Testing the function
const weightedAvg = calculateWeightedAverage(grades)
console.log('Weighted Average:', weightedAvg.toFixed(0)) // Output: Weighted Average: 87
