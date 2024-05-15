const fs = require("fs");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const router = express.Router();
const BOOKS_FILEPATH = "./data/books.json";

function getData() {
  return JSON.parse(fs.readFileSync(BOOKS_FILEPATH));
}
function saveData(data) {
  return fs.writeFileSync(BOOKS_FILEPATH, JSON.stringify(data, null, 2));
}

router.get("/books", (_req, res) => {
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

router.get("/books/:id", (req, res) => {
  const books = getData();
  const bookId = req.params.id;

  const book = books.find((book) => book.id === bookId);

  if (!book) {
    return res.status(404).send("Book not found");
  }

  res.send(book);
});

//books by genre
router.get("/genre/:genre", (req, res) => {
  const books = getData();
  const genre = req.params.genre;
  const booksByGenre = books.filter((book) => book.genre.includes(genre));

  res.send(booksByGenre);
});

router.post("/books", (req, res) => {
  const books = getData();
  const newBook = req.body;
  const postBook = {
    id: uuidv4(),
    title: newBook.title,
    author: newBook.author,
    image: newBook.image,
    published: newBook.published,
    description: newBook.description,
    genre: newBook.genre,
    reviews: newBook.reviews,
    isRead: newBook.isRead,
    currentRead: newBook.currentRead,
  };

  console.log(postBook);
  console.log(newBook);
  books.push(postBook);
  saveData(books);
  res.send(postBook);
});

//Delete books

router.delete("/books/:id", (req, res) => {
  const books = getData();
  const bookId = req.params.id;
  const removedBook = books.find((book) => book.id === bookId);
  const booksAfterDeletion = books.filter((book) => book.id !== bookId);
  saveData(booksAfterDeletion);
  res.send(removedBook);
});

module.exports = router;
