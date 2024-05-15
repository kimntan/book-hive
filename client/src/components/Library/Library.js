import Book from "../Book/Book";
import "./Library.scss";

export default function Library({ books }) {
  return (
    <div className="library">
      {books.map((book) => (
        <Book
          key={book.id}
          // title={book.title}
          // author={book.author}
          imageUrl={book.image}

        />
      ))}
    </div>
  );
}
