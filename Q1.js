const process = require('process')
const os = require('os')
const path = require('path')

// 1.1 - Print out the current working directory
const printCwd = process.cwd()
console.log(printCwd)


// 1.2 - Print out the separator of a given file path
const pathSep = path.sep
console.log(pathSep)


// 1.3 - Print out the extension name of a file path

    // Getting the current file name
    const currentFile = path.basename(__filename)
    // console.log(currentFile)

const extName = path.extname(currentFile);
console.log(extName)


// 1.4 - Print out the process id of the current running process
const pID = process.pid
console.log(pID)


//1.5 - Print out the user information of the os
const currentUserInfo = os.userInfo()
console.log(currentUserInfo)

//1.6 - Print out the platform of an operating system
const osPlatfrom = os.platform()
console.log(osPlatfrom)