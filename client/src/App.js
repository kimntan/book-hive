import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import BookDetails from "./pages/BookDetails/BookDetails";
import AddBook from "./pages/AddBook/AddBook";
import { useState, useEffect } from "react";
import axios from "axios";
import { BookSiteApi } from "./api/api";
//require("dotenv").config();
import "./App.css";

function App() {
  const bookSiteApi = new BookSiteApi();
  const [books, setBooks] = useState([]);

  const displayData = async () => {
    try {
      const data = await bookSiteApi.getBooks();

      setBooks(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // console.log(books)
    if (books.length === 0) {
      displayData();
    }
  }, [books]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/books" element={<Home books={books} />} />
        <Route path="/books/:bookId" element={<BookDetails />} />
        <Route path="/books/add" element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
