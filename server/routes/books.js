const fs = require("fs");
const express = require("express");

const router = express.Router();
const BOOKS_FILEPATH = "./data/books.json";

function getData() {
  return JSON.parse(fs.readFileSync(BOOKS_FILEPATH));
}

router.get("/", (_req, res) => {
  const books = getData();
  const bookList = books.map((book) => {
    return {
      id: book.id,
      title: book.title,
      image: book.image,
      author: book.author,
    };
  });
  res.send(bookList);
});

router.get("/:id", (req, res) => {
  const books = getData();
  const bookId = req.params.id;

  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return res.status(404).send("Book not found");
  }

  res.send(book);
});

module.exports = router;
