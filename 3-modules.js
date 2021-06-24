// CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)

//modules
const names = require("./4-names")
const sayHi =  require("./5-utlis")
const data = require("./6-alternative-flavour")
require("./7-mind-granade")

// console.log(data);
sayHi("Nahean")
sayHi(names.john)
sayHi(names.peter)