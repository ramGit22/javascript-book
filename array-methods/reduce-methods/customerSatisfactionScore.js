const customerRatings = [4.5, 3.8, 5.0, 4.2, 4.9]
function calculateCustomerSatisfactionScore(ratings) {
  const result = ratings.reduce((acc, rating) => {
    return acc + rating
  }, 0)
  return result
}
// Test your function
const overallScore = calculateCustomerSatisfactionScore(customerRatings)
console.log(`Overall Customer Satisfaction Score: ${overallScore}`)
