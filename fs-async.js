const { readFile, writeFile } =require ('fs')

readFile(
    './folder1/first.text',
        'utf8',
    (err,result) =>{
        if (err) {
            console.log(err)
            return
        } 
        const first = result;
        readFile('./folder1/second.txt','utf8', (err,result) =>{
            if (err)  {
                console.log(err)
                returb
            }
            const second = result;
            writeFile('./folder1/third.txt',`${first}${second}`,err =>{
                if (err){
                    console.log(err)
                }
            })   
        })
       
    })