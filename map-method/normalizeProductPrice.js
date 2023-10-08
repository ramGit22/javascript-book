function normalizeProductPrices(products) {
  return products.map((product) => {
    let normalizedPriceArray = []
    for (i = 0; i < product.prices.length; i++) {
      const minimumPrice = Math.min(...product.prices)
      const maximumPrice = Math.max(...product.prices)
      const normalizedPrice =
        ((product.prices[i] - minimumPrice) / (maximumPrice - minimumPrice)) *
        100
      normalizedPriceArray.push(normalizedPrice)
    }

    return { ...product, normalizedPriceArray }
  })
}
const products = [
  { name: 'Laptop', category: 'Electronics', prices: [900, 1000, 1100] },
  { name: 'Smartphone', category: 'Electronics', prices: [400, 450, 500] },
  { name: 'Shirt', category: 'Apparel', prices: [20, 25, 30] },
  { name: 'Pants', category: 'Apparel', prices: [40, 50, 60] },
]
const normalizedProducts = normalizeProductPrices(products)
console.log(normalizedProducts)
