const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
res.send('hello, there');
});


module.exports = app;
