const express = require('express');
const app = express();
const people = require('./routes/people');

app.use('/people',people);
app.listen(3000);