//syncronas one
const {readFileSync, writeFileSync} = require("fs")

// const fs = require('fs')


// console.log(fs);

// var varName = destructureName('path', option)
const first = readFileSync('./content/first.txt','utf8')
const second = readFileSync('./content/second.txt','utf8')

console.log(first,second);



//--> so writeFileSync lets me create a new file and add text or anything into it.
//->everytime i run node --app.js-- if therw were no file in that name then they wil create a new file  and write if thye value is passed. and this will re write the file everytime
//->the last --flag- is used for stop it reWriting

//writeFileSync("file name or path", "value or text or anything", "option or object not letting rewriting")
writeFileSync("./content/result-sync.txt",
              `here's the result: ${first} ${second}`,
 //             { flag: 'a'}
              )


