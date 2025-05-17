const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
res.send('hello, there');
});

app.listen(3000, () => console.log('server running'));

module.exports = app;
