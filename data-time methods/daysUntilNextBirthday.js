function daysUntilNextBirthday(dob) {
  // Current date
  const currentDate = new Date()
  // Date of birth
  const birthDate = new Date(dob)

  // Adjust the year of the birth date to the next birthday year
  birthDate.setFullYear(currentDate.getFullYear())

  // If the birthday has already passed this year, move it to the next year
  if (birthDate < currentDate) {
    birthDate.setFullYear(currentDate.getFullYear() + 1)
  }

  // Calculate the difference in milliseconds
  const difference = birthDate - currentDate

  // Convert the difference from milliseconds to days
  const days = Math.ceil(difference / (1000 * 60 * 60 * 24))

  return days
}

// Sample data: Date of birth
const dob = '1995-05-15'

// Calculate days until next birthday
const days = daysUntilNextBirthday(dob)

// Output the result
console.log(days) // Output will vary depending on the current date
