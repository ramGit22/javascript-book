function calculateTotalWithTax(prices) {
  return prices.map((price) => price + price * 0.1)
}

const prices = [100, 200, 300]

const pricesWithTax = calculateTotalWithTax(prices)
console.log(pricesWithTax)

// function calculateTotalWithTax(prices) {
//   let pricesWithTax = []
//   for (let i = 0; i < prices.length; i++) {
//     const calculatePriceWithTax = prices[i] + prices[i] * 0.1
//     pricesWithTax.push(calculatePriceWithTax)
//   }
//   return pricesWithTax
// }

// const prices = [100, 200, 300]
// const pricesWithTax = calculateTotalWithTax(prices)
// console.log(pricesWithTax)
