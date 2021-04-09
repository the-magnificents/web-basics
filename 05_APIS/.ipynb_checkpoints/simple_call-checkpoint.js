const fetch = require('node-fetch');

// API example
fetch('https://jsonplaceholder.typicode.com/posts/')
  .then(res => res.json())
  .then(console.log)
