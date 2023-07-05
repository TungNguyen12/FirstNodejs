const fs = require("fs"); // FS stands for file system
const path = require("path");

// Create folder

// fs.mkdir(path[,options], callback), fs make directory
// fs.mkdir(path.join(__dirname, "/test"), {}, (err) => {
//     if (err) throw err;
//     console.log("folder created... ");
// }); // dir = directory
// //        directory name, folder name test, second parameter of mkdir {} is option

// Create and write to file
// fs.writeFile(
//     path.join(__dirname, "/test", "hello.txt"),
//     "This is the second parameter, which is the content you are gonna write",
//     (err) => {
//         if (err) throw err;
//         console.log("File written to... ");

//         // File append
//         fs.appendFile(
//             //instead of create 2 writeFile
//             path.join(__dirname, "/test", "hello.txt"),
//             " I love Node.js",
//             (err) => {
//                 if (err) throw err;
//                 console.log("File written to... ");
//             }
//         );
//     }
// ); // dir = directory
//        directory name, folder name test, second parameter of mkdir {} is option

// Read file
// fs.readFile(path.join(__dirname, "/test", "hello.txt"), "utf8", (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

// Rename file

// fs.rename(oldPath, newPath, callback)
fs.rename(
    path.join(__dirname, "/test", "hello.txt"),
    path.join(__dirname, "/test", "helloworld.txt"),
    (err) => {
        if (err) throw err;
        console.log("File renamed...");
    }
);
