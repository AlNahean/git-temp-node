//Asyncronas one
const {readFile, writeFile} = require("fs")


/*
//-->so the --async-- is almost same as sync except it lets me use callback function to detect an error.

//--> Lets say i have 2 parameters now i would have to use read/write-File now in in readFile i would add a --if-- statement so i can detect the error and if theres no error then it will move to the next parameter to check

//-->if bothnested parameter gets passed then i will add the weiteFile in last of nested one

//--> --writeFile-- will same as --WriteFileSync--
*/
readFile('./content/first.txt', (err, result)=>{
    if (err) {
        console.log(err);
        return
    }   
        console.log(result)
        const first = result
        readFile('./content/second.txt', (err, result)=>{
            if (err) {
                console.log(err);
                return
            }
            console.log(result);
            const second = result
            writeFile(
                './content/async-result.txt',
                `here's the result: ${first} ${second}`,
                (err,result)=>{
                    if (err) {
                        console.log(err);
                        return
                    }
                    console.log(result);
                }
            )
        })
})

//callback hell