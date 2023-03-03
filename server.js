const express = require('express');
const app = express();
const path = require('path');
const app = require('./routes/index')

const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(express.static('public'));

app.use('/', HTMLnotesRouter);
app.use('./api', APInotesRouter);


app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
);


