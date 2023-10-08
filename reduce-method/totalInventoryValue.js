// function calculateTotalInventoryValue(products) {
//   let inventoryValue = 0
//   products.forEach((element) => {
//     const productTotal = element.unitsInStock * element.unitPrice
//     inventoryValue += productTotal
//   })
//   return inventoryValue
// }
// const products = [
//   { name: 'Laptop', unitsInStock: 6, unitPrice: 1000 },
//   { name: 'Smartphone', unitsInStock: 10, unitPrice: 500 },
//   { name: 'TV', unitsInStock: 3, unitPrice: 1500 },
//   { name: 'Headphones', unitsInStock: 15, unitPrice: 100 },
// ]
// console.log(calculateTotalInventoryValue(products))

function calculateTotalInventoryValue(products) {
  return products.reduce((acc, product) => {
    return acc + product.unitsInStock * product.unitPrice
  }, 0)
}
const products = [
  { name: 'Laptop', unitsInStock: 5, unitPrice: 1000 },
  { name: 'Smartphone', unitsInStock: 10, unitPrice: 500 },
  { name: 'TV', unitsInStock: 3, unitPrice: 1500 },
  { name: 'Headphones', unitsInStock: 15, unitPrice: 100 },
]
console.log(calculateTotalInventoryValue(products))
