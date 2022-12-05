const fs = require('fs')
fs.writeFile("./newFile.js", "Hello", ()=>{
    console.log("File has been created");
})

async function message(){

    let messageOne = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Welocome");
            reject("Error")
        },2000)
    })

    let messageTwo = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Thank you");
            reject("Error")
        },6000)
    })

    let greeting1 = await messageOne;
    console.log(greeting1);
    let greeting2 = await messageTwo;
    console.log(greeting2);
    return [greeting1,greeting2]
}
message()