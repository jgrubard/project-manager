require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');

app.use('/vendor', express.static(path.join(__dirname, '../node_modules')));
app.use('/public', express.static(path.join(__dirname, '../client/public')));
app.use('/dist', express.static(path.join(__dirname, '../dist')));

app.use(require('body-parser').json());

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/public/index.html'));
});

app.use('/api', require('./routes'));

app.use((err, req, res, next) => {
  console.log(err.stack);
  res.status(500).send(err);
});

module.exports = app;