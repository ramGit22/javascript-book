// // Sample data: Array of users
// const users = [
//   { name: 'John', hasUnreadNotification: true },
//   { name: 'Jane', hasUnreadNotification: false },
//   { name: 'Doe', hasUnreadNotification: true },
// ]

// // Function to send notifications to users with unread notifications
// function sendNotifications(users) {
//   // Using forEach() to iterate over each user
//   users.forEach((user) => {
//     // Check if the user has an unread notification
//     if (user.hasUnreadNotification) {
//       // Send a notification to the user
//       console.log(`Notification sent to ${user.name}`)
//     }
//   })
// }

// // Sending notifications
// sendNotifications(users)
// Sample data: Array of users
const users = [
  { name: 'John', hasUnreadNotification: true },
  { name: 'Jane', hasUnreadNotification: false },
  { name: 'Doe', hasUnreadNotification: true },
]

// Function to send notifications to users with unread notifications using a loop
function sendNotifications(users) {
  // Loop through each user in the users array
  for (let i = 0; i < users.length; i++) {
    // Check if the user has an unread notification
    if (users[i].hasUnreadNotification) {
      // Send a notification to the user
      console.log(`Notification sent to ${users[i].name}`)
    }
  }
}

// Sending notifications
sendNotifications(users)
