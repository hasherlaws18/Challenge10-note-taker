const express = require('express');

const HTMLnotesRouter = require('./HTMLnotes');
const APInotesRouter = require('./APInotes')

const app = express();

app.use('/HTMLnotes', HTMLnotesRouter);
app.use('./APInotes', APInotesRouter);

module.exports = app;