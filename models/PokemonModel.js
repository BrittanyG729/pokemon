const { Schema, model } = require('mongoose')

const PokemonSchema = new Schema({
    name: String,
    img: String
})

const PokemonModel = model('pokemon', PokemonSchema, 'pokemon')

module.exports = PokemonModel