const os = require("node:os");

console.log("Architecture", os.arch())
console.log("Memory", os.totalmem())
console.log("CUP", os.cpus().length)
console.log("Free Memory", os.freemem())
console.log("Name of the machine", os.userInfo().username)
console.log("No of parallelism", os.availableParallelism())