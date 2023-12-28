/*
        ``      template string
        ${}     template literal

        let name = "doug"

        "hello " + name + "!"
        `hello ${name}!`

        Now listeing on port 4321

        "now listening on " + port
        `now listening on ${port}`

        nodemon server

        app.get(endpoint, middleware)
            (req, res) => {}
*/

const express = require("express")
const app = express()
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(port, ()=>{
    console.log(`
    now listening on ${port}
    http://localhost:${port}/
    `)
})