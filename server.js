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

const jsx = require('jsx-view-engine')

const pokemon = require('./models/pokemon.js')

app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', jsx())

app.get("/", (req, res) => {
    res.render('Index.jsx', { pokemon })
})

app.get("/pokemon/:index", (req, res) => {
    res.render('Show.jsx', { pokemon: pokemon[req.params.index] })
})

app.listen(port, ()=>{
    console.log(`
    now listening on ${port}
    http://localhost:${port}/
    `)
})