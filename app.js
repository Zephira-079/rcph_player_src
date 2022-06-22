const fs = require('fs')
const folderName = "KawaiiNeko"

fs.readdir(`./${folderName}`,(err,folderData) => {
    for(i of folderData){
        const stat = fs.statSync(`./${folderName}/${i}`)
        const fileSize = stat.size / (1024*1024)
        if(fileSize > 5){
            console.log(i + " : elegant : " + fileSize)
        }
        else {
            console.log(i + " : " + fileSize)
        }
    }
})