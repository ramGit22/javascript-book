// Sample data: Radius of a circle
const radius = 5

// Function to calculate the area of a circle
function calculateArea(radius) {
  // Use the formula πr^2 to calculate the area
  return Math.PI * Math.pow(radius, 2)
}

// Calculate the area of the circle
const area = calculateArea(radius)

// Output the area to the console
console.log(area) // Expected Output: 78.53981633974483
