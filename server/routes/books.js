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

router.delete("/books/:id", (req, res) => {
  const books = getData();
  const bookId = req.params.id;
  const removedBook = books.find((book) => book.id === bookId);
  const booksAfterDeletion = books.filter((book) => book.id !== bookId);
  saveData(booksAfterDeletion);
  res.send(removedBook);
});

router.patch("/books/:id", (req, res) => {
  try {
    let books = getData();
    const bookId = req.params.id;
    const updatedFields = req.body;
    const newBooks = books.map((book) => {
      if (book.id === bookId) {
        book = { ...book, ...updatedFields };
      } else {
        return book;
      }
      return book;
    });

    books = [...newBooks];
    saveData(books);
    res.send(`Updated fields:\n ${JSON.stringify(updatedFields, null, 2)}`);
  } catch (error) {
    return res.status(400).send("Unable to update book");
  }
});

module.exports = router;
