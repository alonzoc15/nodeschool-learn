'use strict'
const fs = require('fs')

const operation = fs.readFileSync(process.argv[2])
const methods = operation.toString().split('\n').length - 1
console.log(methods)