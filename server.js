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

        MONGO_URI=mongodb+

        npm i mongoose
*/

const express = require("express")
const app = express()
const port = 3000;

const mongoose = require('mongoose')
const PokemonModel = require('./models/PokemonModel.js')
require('dotenv').config()
const { MONGO_URI } = process.env
const jsx = require('jsx-view-engine')
// const pokemon = require('./models/pokemon.js')

async function getAllPokemon() {
    const pokemon = await PokemonModel.find({})
    return pokemon
}

mongoose.connect(MONGO_URI)
    .then(()=>{
        console.log('Successfully connected to MongoDB')
        // we only do this once to add them to the database
        // pokemon.forEach(async p => {
        //     const newPokemon = new PokemonModel(p)
        //     newPokemon.save()
        // })
    })
    .catch((err)=>{
        console.log('Failed to connect to MongoDB')
        console.log(err)
    })


app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', jsx())

app.use(express.static('public'))

app.get("/", async (req, res) => {
    const pokemon = await getAllPokemon()
    res.render('Index.jsx', { pokemon })
})

app.get("/pokemon/:index", async (req, res) => {
    const pokemon = await getAllPokemon()
    res.render('Show.jsx', { pokemon: pokemon[req.params.index] })
})

app.listen(port, ()=>{
    console.log(`
    now listening on ${port}
    http://localhost:${port}/
    `)
})