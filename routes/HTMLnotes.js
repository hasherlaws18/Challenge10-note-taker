const HTMLnotes = require('express').Router();
const { router } = require('express');
const path = require('path');

HTMLnotes.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
});

HTMLnotes.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

HTMLnotes.get('*', (res,req) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
});

module.exports = HTMLnotes