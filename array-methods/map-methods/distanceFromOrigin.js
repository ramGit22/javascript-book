// // Sample data: Array of coordinates
// const coordinates = [
//   { x: 3, y: 4 },
//   { x: 6, y: 8 },
//   { x: 8, y: 15 },
// ]

// // Function to calculate the distance from the origin for each coordinate
// function calculateDistanceFromOrigin(coordinates) {
//   // Using map() to calculate the distance for each coordinate
//   return coordinates.map((coord) => {
//     // Applying the Pythagorean theorem to calculate the distance
//     return Math.sqrt(coord.x ** 2 + coord.y ** 2)
//   })
// }

// // Testing the function
// const distances = calculateDistanceFromOrigin(coordinates)
// console.log(distances) // Output: [5, 10, 17]
// Sample data: Array of coordinates
const coordinates = [
  { x: 3, y: 4 },
  { x: 6, y: 8 },
  { x: 8, y: 15 },
]

// Function to calculate the distance from the origin for each coordinate using a loop
function calculateDistanceFromOrigin(coordinates) {
  // Initialize an empty array to store the distances
  let distances = []

  // Loop through each coordinate in the coordinates array
  for (let i = 0; i < coordinates.length; i++) {
    // Calculate the distance using the Pythagorean theorem
    const distance = Math.sqrt(coordinates[i].x ** 2 + coordinates[i].y ** 2)

    // Add the calculated distance to the distances array
    distances.push(distance)
  }

  // Return the array of distances
  return distances
}

// Testing the function
const distances = calculateDistanceFromOrigin(coordinates)
console.log(distances) // Output: [5, 10, 17]
