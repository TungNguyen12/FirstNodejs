const url = require('url');

const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active')

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString()); // .href or .toString() will give you the same thing 

// Host (or root domain), in this case is mywebsite.com
console.log(myUrl.host);

// Hostname (get the host name), this does not include the PORT
console.log(myUrl.hostname);

// Pathname
console.log(myUrl.pathname); // returns /hello.html

// Serialized query
console.log(myUrl.search); // return everything from the ? mark, ?id=100&status=active

// If we want to create an object from .search => use Param
// Params object (Parameter)
console.log(myUrl.searchParams);

// Add parameter dynamically
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`))