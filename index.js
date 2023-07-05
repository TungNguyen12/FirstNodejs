const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // if (req.url === "/") {
    //     fs.readFile(
    //         path.join(__dirname, "public", "index.html"),
    //         (err, content) => {
    //             if (err) throw err;
    //             res.writeHead(200, { "Content-Type": "text/html" });
    //             res.end(content); // nodemon is continuously watching the change => npm run dev (check package.js, script)
    //         }
    //     );
    // }
    // // if (req.url === "/about") {
    // //     fs.readFile(
    // //         path.join(__dirname, "public", "about.html"),
    // //         (err, content) => {
    // //             if (err) throw err;
    // //             res.writeHead(200, { "Content-Type": "text/html" });
    // //             res.end(content);
    // //         }
    // //     );
    // // }

    // if(req.url === '/api/users') {
    //     const users= [
    //         {name: 'tung nguyen', age : 40},
    //         {name: 'pete', age : 20},
    //     ];
    //     res.writeHead(200, { "Content-Type": "application/json" });
    //     res.end(JSON.stringify(users))
    // }

    //BUILD FILE PATH DYNAMIC
    let filePath = path.join(
        __dirname,
        "public",
        req.url === "/" ? "index.html" : req.url
    );

    // Extension of file
    let extname = path.extname(filePath);

    // Initial content type
    let contentType = "text/html";

    // Check ext and set content type
    switch (extname) {
        case ".js":
            contentType = "text/javascript";
            break;
        case ".css":
            contentType = "text/css";
            break;
        case ".json":
            contentType = "application/json";
            break;
        case ".png":
            contentType = "image/png";
            break;
        case ".jpg":
            contentType = "image/jpg";
            break;
    } // let's say we want to check the extension name

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code == "ENOENT") {
                // pAGE NOT FOUND
                fs.readFile(
                    path.join(__dirname, "public", "404.html"),
                    (err, content) => {
                        res.writeHead(200, { "Content-Type": "text/html" });
                        res.end(content, "utf8");
                    }
                );
            } else {
                // Some server error
                res.writeHead(500);
                res.end(`Server Error: ${err.code}`);
            }
        } else {
            // Success
            res.writeHead(200, { "Content-Type": contentType });
            res.end(content, "utf8");
        }
    });
});

const PORT = process.env.PORT || 5000; //the host will decide which PORT, first the host will look for the environment variable and then if not, it will take the 5000

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express')
const app = express()

app.use(express.json())

app.post('/api/v1/users', (req, res) => {
    const newUser = req.body
    const createdUser = userService(createOne(newUser))

    res.status(201).json(createdUser)
})

what does the app.use(express.json()) middleware do

which statement would you use to select total amount of orders for each user with total order amount greater than 100$
CREATE TABLE orders (
    is SERIAL PRIMARY KeyboardEvent,
    user_id INTEGER NOT null, 
    amount NUMERIC(10,2) NOT NULL
);