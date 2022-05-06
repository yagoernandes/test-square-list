const squareRootMap = require('./index');

if (process.argv.length < 3) throw new Error('Must contain an argument')

const list_parameter = JSON.parse(process.argv[2])

const result = squareRootMap(list_parameter)

console.log(result)