const APInotes = require('express').Router();
const path = require('path')
let notes = require('../db/db.json')

APInotes.get('/api/notes', (req, res) => {
    let noteresults = notes
    res.json(noteresults);
})

APInotes.get('/api/notes', (req, res) => {

})


module.exports = APInotes