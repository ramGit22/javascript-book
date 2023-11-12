// // Sample data: Array of customer ratings
// const customerRatings = [4.5, 3.8, 5.0, 4.2, 4.9]

// // Function to calculate the overall customer satisfaction score
// function calculateCustomerSatisfactionScore(ratings) {
//   // Using reduce() to sum up all the ratings
//   const total = ratings.reduce((sum, rating) => sum + rating, 0)

//   // Calculating the average rating
//   const average = total / ratings.length

//   // Rounding the average to the nearest integer
//   return Math.round(average)
// }

// // Testing the function
// const overallScore = calculateCustomerSatisfactionScore(customerRatings)
// console.log(`Overall Customer Satisfaction Score: ${overallScore}`)
// Sample data: Array of customer ratings
const customerRatings = [4.5, 3.8, 5.0, 4.2, 4.9]

// Function to calculate the overall customer satisfaction score using a loop
function calculateCustomerSatisfactionScore(ratings) {
  // Initialize variables for sum and count
  let sum = 0
  let count = 0

  // Loop through each rating in the ratings array
  for (let i = 0; i < ratings.length; i++) {
    // Add the current rating to the sum
    sum += ratings[i]

    // Increment the count
    count++
  }

  // Calculate the average rating
  const average = sum / count

  // Round the average to the nearest integer
  return Math.round(average)
}

// Testing the function
const overallScore = calculateCustomerSatisfactionScore(customerRatings)
console.log(`Overall Customer Satisfaction Score: ${overallScore}`) // Output: 4
