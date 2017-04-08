const express = require('express');
const path = require('path');

// api data
const skuInfo = require('./data/skuInfo');
const productInfo = require('./data/productInfo');
const sellerInfo = require('./data/sellerInfo');

const app = express();

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('hello world!!!');
});

app.get('/react', (req, res) => {
  res.sendFile(path.join(__dirname, 'public') + '/react.html');
});

app.get('/vue', (req, res) => {
  res.sendFile(path.join(__dirname, 'public') + '/vue.html');
});

app.get('/allData', (req, res) => {
  const allData = {
    skuInfo,
    productInfo,
    sellerInfo
  };
  res.json(allData);
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});