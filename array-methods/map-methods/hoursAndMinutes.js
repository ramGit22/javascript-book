// Sample data: Array of durations in minutes
const durations = [120, 150, 90]

// Function to convert durations into hours and minutes
function convertToHoursAndMinutes(durations) {
  // Using map() to transform each duration into a formatted string
  return durations.map((duration) => {
    // Calculate hours by dividing the duration by 60 and rounding down
    const hours = Math.floor(duration / 60)

    // Calculate minutes by getting the remainder of the duration divided by 60
    const minutes = duration % 60

    // Returning the formatted string representing hours and minutes
    return `${hours}h ${minutes}m`
  })
}

// Testing the function
const convertedDurations = convertToHoursAndMinutes(durations)
console.log(convertedDurations) // Output: ["2h 0m", "2h 30m", "1h 30m"]
// // Sample data: Array of durations in minutes
// const durations = [120, 150, 90]

// // Function to convert durations into hours and minutes using a loop
// function convertToHoursAndMinutes(durations) {
//   // Initialize an empty array to store the converted durations
//   let convertedDurations = []

//   // Loop through each duration in the durations array
//   for (let i = 0; i < durations.length; i++) {
//     // Calculate hours by dividing the duration by 60 and rounding down
//     const hours = Math.floor(durations[i] / 60)

//     // Calculate minutes by getting the remainder of the duration divided by 60
//     const minutes = durations[i] % 60

//     // Form the string representing hours and minutes and add it to the array
//     convertedDurations.push(`${hours}h ${minutes}m`)
//   }

//   // Return the array of converted durations
//   return convertedDurations
// }

// // Testing the function
// const convertedDurations = convertToHoursAndMinutes(durations)
// console.log(convertedDurations) // Output: ["2h 0m", "2h 30m", "1h 30m"]
