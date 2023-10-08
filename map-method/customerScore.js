const customers = [
  { name: 'Alice', purchases: [100, 50, 400], location: 'USA' },
  { name: 'Bob', purchases: [200, 300], location: 'Canada' },
  { name: 'Charlie', purchases: [300, 100, 150, 200], location: 'UK' },
  { name: 'Dave', purchases: [50], location: 'Australia' },
]

function calculateCustomerScore(customers) {
  return customers.map((customer) => {
    const totalAmountSpent = customer.purchases.reduce((acc, purchase) => {
      return acc + purchase
    }, 0)
    const numberOfPurchases = customer.purchases.length
    const customerScore = totalAmountSpent * numberOfPurchases
    return { ...customer, customerScore: customerScore }
  })
}
const updatedCustomers = calculateCustomerScore(customers)
console.log(updatedCustomers)
