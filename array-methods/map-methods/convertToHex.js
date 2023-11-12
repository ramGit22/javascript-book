// // Sample data: Array of RGB values
// const rgbValues = [
//   { r: 255, g: 0, b: 0 },
//   { r: 0, g: 255, b: 0 },
//   { r: 0, g: 0, b: 255 },
// ]

// // Function to convert a single RGB value to hex
// function rgbToHex(r, g, b) {
//   // Convert each RGB component to a two-digit hexadecimal string
//   const toHex = (component) => {
//     const hex = component.toString(16)
//     return hex.length == 1 ? '0' + hex : hex
//   }

//   // Concatenate the converted values into a single hex color string
//   return `#${toHex(r)}${toHex(g)}${toHex(b)}`
// }

// // Function to convert each RGB value in the array to hex
// function convertToHex(rgbValues) {
//   // Using map() to transform each RGB object to its hex representation
//   return rgbValues.map((rgb) => rgbToHex(rgb.r, rgb.g, rgb.b))
// }

// // Testing the function
// const hexValues = convertToHex(rgbValues)
// console.log(hexValues) // Output: ["#FF0000", "#00FF00", "#0000FF"]
// Sample data: Array of RGB values
const rgbValues = [
  { r: 255, g: 0, b: 0 },
  { r: 0, g: 255, b: 0 },
  { r: 0, g: 0, b: 255 },
]

// Function to convert a single RGB value to hex
function rgbToHex(r, g, b) {
  // Convert each RGB component to a two-digit hexadecimal string
  const toHex = (component) => {
    const hex = component.toString(16)
    return hex.length == 1 ? '0' + hex : hex
  }

  // Concatenate the converted values into a single hex color string
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

// Function to convert each RGB value in the array to hex using a loop
function convertToHex(rgbValues) {
  // Initialize an empty array to store the hex values
  let hexValues = []

  // Loop through each RGB object in the array
  for (let i = 0; i < rgbValues.length; i++) {
    // Convert the RGB object to a hex string and add it to the hexValues array
    hexValues.push(rgbToHex(rgbValues[i].r, rgbValues[i].g, rgbValues[i].b))
  }

  // Return the array of hex values
  return hexValues
}

// Testing the function
const hexValues = convertToHex(rgbValues)
console.log(hexValues) // Output: ["#FF0000", "#00FF00", "#0000FF"]
