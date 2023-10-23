// // Define an array of users with name and email properties
// const users = [
//   { name: 'John', email: 'john@example.com' },
//   { name: 'Jane', email: 'jane@example.com' },
//   { name: 'Doe', email: 'doe@example.com' },
// ]

// // Define the function printUserEmails to print out emails of the users
// function printUserEmails(users) {
//   // The forEach() method executes a provided function once for each array element.
//   // Here, we're using forEach to iterate over each user in the users array.
//   users.forEach(function (user) {
//     // For each user, we simply print (or log) their email to the console.
//     console.log(user.email)
//   })
// }

// // Call the printUserEmails function with the users array as its argument
// printUserEmails(users)

// // This would print:
// // john@example.com
// // jane@example.com
// // doe@example.com

// Define an array of users with name and email properties
const users = [
  { name: 'John', email: 'john@example.com' },
  { name: 'Jane', email: 'jane@example.com' },
  { name: 'Doe', email: 'doe@example.com' },
]

// Define the function printUserEmails to print out emails of the users
function printUserEmails(users) {
  // Traditional for loop to iterate over the length of the users array
  for (let i = 0; i < users.length; i++) {
    // Access the email of the user at the current index (i) and log it to the console
    console.log(users[i].email)
  }
}

// Call the printUserEmails function with the users array as its argument
printUserEmails(users)

// This would print:
// john@example.com
// jane@example.com
// doe@example.com
