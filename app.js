const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
res.send('hello, there!');
});

app.listen(port, () => console.log('app running on port ${port}'));

module.exports = app;
