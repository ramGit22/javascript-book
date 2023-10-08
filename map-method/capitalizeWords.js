// function capitalizeWords(words) {
//   return words.map((word) => word.slice(0, 1).toUpperCase() + word.slice(1))
// }
// const words = ['apple', 'banana', 'cherry']

// const capitalizedWords = capitalizeWords(words)
// console.log(capitalizedWords)

function capitalizeWords(words) {
  let result = []
  for (let i = 0; i < words.length; i++) {
    const capitalWord = `${words[i].charAt().toUpperCase()}${words[i].slice(1)}`
    result.push(capitalWord)
  }
  return result
}
const words = ['apple', 'banana', 'cherry']

const capitalizedWords = capitalizeWords(words)
console.log(capitalizedWords)
