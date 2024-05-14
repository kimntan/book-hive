const express = require('express');
require('dotenv').config();
const booksRoutes = require('./routes/books');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use('/books', booksRoutes);

app.listen(PORT, () => {
  console.log('book hive');
});