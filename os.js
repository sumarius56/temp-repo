const os = require('os');

//info about current user 
const user = os.userInfo()

// method returns system uptime in seconds
console.log(`System uptime in seconds ${os.uptime}`)

const currentOs ={
    name: os.version(),
    release: os.release(),
    platform: os.platform(),
    arch: os.arch(),
    releaseDate: new Date(),
    Memory: os.totalmem(),
}
console.log(currentOs)