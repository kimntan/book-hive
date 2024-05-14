const fs = require('fs');
const express = require('express');

const router = express.Router();
const BOOKS_FILEPATH = './data/books.json';

function getData() { 
  return JSON.parse(fs.readFileSync(BOOKS_FILEPATH));
}

router.get('/', (_req, res) => {
  const books = getData();
  res.send(books);
})

module.exports = router;