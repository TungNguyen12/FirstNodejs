const path = require('path')

// Base file name 
console.log(path.basename(__filename));

// Directory name
console.log(path.dirname(__filename)); //this will give us the directory

// File extension
console.log(path.extname(__filename));

// Create an object with different part of the path 
console.log(path.parse(__filename).base);

// Concatenate paths 
// ./test/hello.html
console.log(path.join(__dirname, 'test', 'hello.html'));
