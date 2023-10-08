function extractNames(users) {
  return users.map((user) => user.name)
}

const users = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 30 },
  { name: 'Doe', age: 35 },
]

const names = extractNames(users)
console.log(names)
