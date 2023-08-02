const path = require('path')
const fs = require('fs')


//2.1 - Create directory/folder named: “Students”
fs.mkdir("./Student", (err) => {
    if(err) {
        console.log(err)
        return 
    } 
    console.log("folder created successfully")
})


//2.2 - In the Students directory, create a file named user.js
const newFile = path.join(__dirname, "Student", "user.js")

fs.writeFile(newFile, "\nUsers details:", (err) => {
    if(err) {
        console.log(err)
        return
    } 
    console.log("file created successfully")
})


//2.3 - Update the Students directory to “Names”
const currentFolderName = "./Student"
const newFolderName = "./Names"

fs.rename(currentFolderName, newFolderName, function(err) {
  if (err) {
    console.log(err)
    return
  } 
    console.log("Successfully renamed the directory.")
  
})

// 2.4 - Add your name as content to the file user.js
const filePath = path.join(__dirname, "./Names", "user.js")

fs.appendFile(filePath, "\nBalogun Olanrewaju", (err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log("Name appended successfully")
})

// 2.5 - Update the file and add your age, sex, nationality, phone number 
//     and any other information about yourself

const additionalData = "\nI am 29 years old. \nI'm a Nigerian male and my goal is to become fullstack JS dev. \nMy phone number is 090311XXXXX."

fs.appendFile(filePath, additionalData, (err) => {
    if(err) {
        console.log(err)
        return
    }
    console.log("operation successful")
    console.log(additionalData)
})

// 2.6 - Update the file user.js to {your_name}.js eg daniel_adesoji.js
const oldFilePathName = path.join(__dirname, "Names", "user.js")
const newFilePathName = path.join(__dirname, "Names", "Balogun_Olanrewaju.js")

fs.rename(oldFilePathName, newFilePathName, (err) => {
        if(err) {
            console.log(err)
            return
        }
        console.log("File successfully renamed")
})


// 2.7 - Read the contents from {your_name}.js. Use fs.open or fs.readFile
fs.readFile(newFilePathName, 'utf8', (err, fileContent) => {
    if (err) {
        console.log(err)
        return
    }
    console.log("File read successfully")
    console.log(fileContent)
})

// 2.8 - Delete the file {your_name}.js
fs.rm(newFilePathName, (err) => {
    if (err) {
        console.log(err)
        return
    }
    console.log('File deleted successfully')
})

// 2.9 Delete the directory “Names”
fs.rmdir(newFolderName, (err)=>{
    if(err) {
        console.log(err)
        return
    }
    console.log("Folder deleted successfully")
})
