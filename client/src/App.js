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
  const [books, setBooks] = useState([]);

  useEffect(() => {
    displayData();
  }, []);

  const displayData = async () => {
    try {
      const bookSiteApi = new BookSiteApi();
      const data = await bookSiteApi.getBooks();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  };


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
