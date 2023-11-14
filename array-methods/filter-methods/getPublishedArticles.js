// // Sample data: Array of articles
// const articles = [
//   { title: 'JS Basics', content: 'Lorem ipsum...', isPublished: true },
//   { title: 'Advanced React', content: 'Lorem ipsum...', isPublished: false },
//   { title: 'Vue vs React', content: 'Lorem ipsum...', isPublished: true },
// ]

// // Function to get all published articles
// function getPublishedArticles(articles) {
//   // Using filter() to return only those articles where isPublished is true
//   return articles.filter((article) => article.isPublished)
// }

// // Testing the function
// const publishedArticles = getPublishedArticles(articles)
// console.log(publishedArticles)
// Sample data: Array of articles
const articles = [
  { title: 'JS Basics', content: 'Lorem ipsum...', isPublished: true },
  { title: 'Advanced React', content: 'Lorem ipsum...', isPublished: false },
  { title: 'Vue vs React', content: 'Lorem ipsum...', isPublished: true },
]

// Function to get all published articles using a loop
function getPublishedArticles(articles) {
  // Initialize an array to hold published articles
  let publishedArticles = []

  // Loop through each article in the articles array
  for (let i = 0; i < articles.length; i++) {
    // If the article is published, add it to the publishedArticles array
    if (articles[i].isPublished) {
      publishedArticles.push(articles[i])
    }
  }

  // Return the array of published articles
  return publishedArticles
}

// Testing the function
const publishedArticles = getPublishedArticles(articles)
console.log(publishedArticles)
