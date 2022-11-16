const fs = require('fs')
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question("path: ",(ans) => {
    fs.readdir(`${ans}`,"utf-8",(err,files) => {
        files.forEach((item,index) => {
            const size = fs.statSync(`${ans}/${item}`).size / (1024 * 1024)
            if(size > 25) {
                fs.rename(`${ans}/${item}`,`KawaiiDekai/${item}`,() => {
                    
                })
                console.log(`${item} : ${size.toFixed(2)}`)
            }
        })
    readline.close()
    })
})