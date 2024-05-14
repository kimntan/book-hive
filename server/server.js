const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', function(req, res) {
  res.send('welcome to bookhive');
})

app.listen(PORT, () => {
  console.log('book hive');
});