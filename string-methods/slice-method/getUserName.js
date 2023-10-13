// function getUserName(email) {
//   const indexOfAt = email.indexOf('@')
//   const userName = email.slice(0, indexOfAt)
//   return userName
// }
// const email = 'john.doe@example.com'
// const userName = getUserName(email)
// console.log(userName)

// // Solution using 'For'loop
function getUserName(email) {
  let userName = ''
  for (let i = 0; i < email.length; i++) {
    if (email[i] === '@') {
      break
    }
    userName += email[i]
  }
  return userName
}
const email = 'john.doe@example.com'
const userName = getUserName(email)
console.log(userName)

// Solution using 'Array' and 'For' loop
// function getUserName(email) {
//   let userName = ''
//   const emailArray = email.split('')
//   for (let i = 0; i < emailArray.length; i++) {
//     if (emailArray[i] === '@') {
//       break
//     }
//     userName += emailArray[i]
//   }
//   return userName
// }
// const email = 'john.doe@example.com'
// const userName = getUserName(email)
// console.log(userName)
