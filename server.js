const { readFile } = require("fs")
const http = require('http')


const server = http.createServer((req, res) => {
    console.log("request recieved: " + req.url)
    if (req.url === "/") {
        console.log("yo")
        readFile("./index.html", "utf8", (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.end(data)
        })
    }
})

server.listen(5000)