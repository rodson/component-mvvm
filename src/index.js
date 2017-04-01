const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
  res.send('hello world!!!');
});

app.get('/react', (req, res) => {
  res.sendFile(path.join(__dirname, 'public') + '/react.html');
});

app.get('/vue', (req, res) => {
  res.sendFile(path.join(__dirname, 'public') + '/vue.html');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});