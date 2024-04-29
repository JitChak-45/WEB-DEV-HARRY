
var slugify = require('slugify')

const a=slugify('some string') // some-string
console.log(a);

// npm--> node package manager

// if you prefer something other than '-' as separator
const b=slugify('some string49589457894-00=$#%', '_')  // some_string
console.log(b);