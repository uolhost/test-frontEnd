const express = require('express');
const users = require('./users.json');

const app = express();
app.use(express.static('public'))

app.get('/users', (req, res) => {
  res.json(users);
});

const PORT = process.env.PORT || 7000;
app.listen(PORT);
console.log(`Server Listening on Port ${PORT}`);