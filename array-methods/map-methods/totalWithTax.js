// // Sample data: Array of product prices
// const prices = [100, 200, 300]

// // Function to calculate the total price with tax for each product
// function calculateTotalWithTax(prices) {
//   // Defining the tax rate
//   const taxRate = 0.1

//   // Using map() to calculate and return the total price including tax for each price
//   return prices.map((price) => price + price * taxRate)
// }

// // Testing the function
// const pricesWithTax = calculateTotalWithTax(prices)
// console.log(pricesWithTax) // Output: [110, 220, 330]
// Sample data: Array of product prices
const prices = [100, 200, 300]

// Function to calculate the total price with tax for each product using a loop
function calculateTotalWithTax(prices) {
  // Defining the tax rate
  const taxRate = 0.1

  // Initialize an empty array to store the prices with tax
  let pricesWithTax = []

  // Loop through each price in the prices array
  for (let i = 0; i < prices.length; i++) {
    // Calculate the total price including tax and add it to the pricesWithTax array
    pricesWithTax.push(prices[i] + prices[i] * taxRate)
  }

  // Return the array of prices with tax
  return pricesWithTax
}

// Testing the function
const pricesWithTax = calculateTotalWithTax(prices)
console.log(pricesWithTax) // Output: [110, 220, 330]
