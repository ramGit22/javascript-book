// // Sample data: Array of customers with their names, purchases, and location
// const customers = [
//   { name: 'Alice', purchases: [100, 50, 400], location: 'USA' },
//   { name: 'Bob', purchases: [200, 300], location: 'Canada' },
//   { name: 'Charlie', purchases: [300, 100, 150, 200], location: 'UK' },
//   { name: 'Dave', purchases: [50], location: 'Australia' },
// ]

// // Function to calculate customer score for each customer
// function calculateCustomerScore(customers) {
//   // Using map() to transform each customer object in the array
//   return customers.map((customer) => {
//     // Calculating the total amount spent by each customer
//     // by summing up the values in their purchases array
//     const totalSpent = customer.purchases.reduce(
//       (total, current) => total + current,
//       0
//     )

//     // Calculating the number of purchases for each customer
//     const numOfPurchases = customer.purchases.length

//     // Calculating the customer score using the formula
//     // Customer Score = Total Amount Spent × Number of Purchases
//     const customerScore = totalSpent * numOfPurchases

//     // Returning the modified customer object with the new customerScore property
//     return { ...customer, customerScore }
//   })
// }

// // Testing the function
// const updatedCustomers = calculateCustomerScore(customers)
// console.log(updatedCustomers)
// Sample data: Array of customers with their names, purchases, and location
const customers = [
  { name: 'Alice', purchases: [100, 50, 400], location: 'USA' },
  { name: 'Bob', purchases: [200, 300], location: 'Canada' },
  { name: 'Charlie', purchases: [300, 100, 150, 200], location: 'UK' },
  { name: 'Dave', purchases: [50], location: 'Australia' },
]

// Function to calculate customer score for each customer using a loop
function calculateCustomerScore(customers) {
  // Initialize an empty array to store the updated customers
  let updatedCustomers = []

  // Loop through each customer in the customers array
  for (let i = 0; i < customers.length; i++) {
    // Access the current customer
    const customer = customers[i]

    // Initialize a variable to store the total amount spent
    let totalSpent = 0

    // Loop through the customer's purchases to calculate the total amount spent
    for (let j = 0; j < customer.purchases.length; j++) {
      totalSpent += customer.purchases[j]
    }

    // Calculate the number of purchases for the customer
    const numOfPurchases = customer.purchases.length

    // Calculate the customer score
    const customerScore = totalSpent * numOfPurchases

    // Add the customerScore property to the customer object
    // and push the updated object to the updatedCustomers array
    updatedCustomers.push({ ...customer, customerScore })
  }

  // Return the array of updated customers
  return updatedCustomers
}

// Testing the function
const updatedCustomers = calculateCustomerScore(customers)
console.log(updatedCustomers)
