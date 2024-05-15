import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import BookDetails from './pages/BookDetails/BookDetails';
import AddBook from './pages/AddBook/AddBook';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route to='/books' element={<Home />} />
        <Route to='/books/:bookId' element={<BookDetails />} />
        <Route to='/books/add' element={<AddBook />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
