// Define a constant named dob with a date of birth as a string
const dob = '1995-05-15'

// Define a function named calculateAge that takes a single argument dob
function calculateAge(dob) {
  // Create a new Date object from the dob string
  const birthDate = new Date(dob)
  console.log('birthDate', birthDate)
  // Get the current date and time
  const today = new Date()
  console.log('today', today)

  // Calculate the difference in years between today and the birthDate
  let age = today.getFullYear() - birthDate.getFullYear()

  // Check if the birthDate has a month and day that comes after today's month and day
  // If so, subtract 1 from the age since the birthday hasn't occurred this year yet
  const monthDifference = today.getMonth() - birthDate.getMonth()
  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--
  }

  // Return the calculated age
  return age
}

// Call calculateAge, passing the dob constant as an argument,
// and store the returned age value in a constant named age
const age = calculateAge(dob)

// Output the age to the console to verify the function's behavior
console.log(age) // Output will vary depending on the current year; e.g., 28
