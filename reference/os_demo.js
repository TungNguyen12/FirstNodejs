const os = require('os') //OS means Operating system

// Platform
console.log(os.platform());


// CPU Arch
console.log(os.arch());

// CPU Core Info
console.log(os.cpus());

// Free memory 
console.log(os.freemem()); // returns the amount of free system memory in bytes as an integer

// Total memory
console.log(os.totalmem());  // returns the total amount of system memory in byte as an integer

// Home dir (directory)
console.log(os.homedir()); // returns the string path of the current user's home directory

// Uptime
console.log(os.uptime()); // returns the system uptime in number of seconds