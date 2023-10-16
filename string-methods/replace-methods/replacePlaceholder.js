// const template = 'Hello, {name}!'
// const text = 'John'

// function replacePlaceholder(template, text) {
//   return template.replace('name', text)
// }

// const greeting = replacePlaceholder(template, text)
// console.log(greeting)
// const template = 'Hello, {name}!'
// const name = 'John'

// function replacePlaceholder(template, name) {
//   let newString = ''

//   for (let i = 0; i < template.length; i++) {
//     // Check if the current character is the start of the placeholder
//     if (template[i] === '{' && template[i + 1] === 'n') {
//       newString += name // Add the actual name to the new string
//       i += 5 // Skip ahead to avoid adding the placeholder
//     } else {
//       newString += template[i] // Add the current character to the new string
//     }
//   }
//   return newString
// }

// const greeting = replacePlaceholder(template, name)
// console.log(greeting)

const input = 'Hello &world&! Have a &great& day!'

function parseCustomMarkup(input) {
  let output = ''
  let isMarkup = false // Flag to track whether we're inside markup

  for (let i = 0; i < input.length; i++) {
    const char = input[i]

    if (char === '&') {
      isMarkup = !isMarkup // Toggle the markup state
    } else if (isMarkup) {
      output += char.toUpperCase()
    } else {
      output += char
    }
  }
  return output
}

const result = parseCustomMarkup(input)
console.log(result) // Output: Hello WORLD! Have a GREAT day!
