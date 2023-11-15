// // Sample data: A name
// const name = 'John Doe'

// // Function to extract initials using charAt()
// function getInitials(name) {
//   // Split the name into its components
//   const parts = name.split(' ')

//   // Extract the first character of each part
//   return parts[0].charAt(0) + parts[1].charAt(0)
// }

// // Get the initials
// const initials = getInitials(name)
// console.log(initials) // Output: JD
// Sample data: A name
const name = 'John Doe'

// Function to extract initials using a loop
function getInitials(name) {
  // Split the name into parts
  const parts = name.split(' ')

  // Initialize an empty string for the initials
  let initials = ''

  // Loop through each part of the name
  for (let i = 0; i < parts.length; i++) {
    // Add the first character of each part to the initials
    initials += parts[i].charAt(0)
  }

  // Return the initials
  return initials
}

// Get the initials
const initials = getInitials(name)
console.log(initials) // Output: JD
