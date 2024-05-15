import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import uploadIcon from "../../assets/Images/Icons/upload.svg";
import FormField from "../FormField/FormField";
import CTA from "../CTA/CTA";
import "./AddBookForm.scss";
import { useState } from "react";

function AddBookForm() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");
  const [published, setPublished] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("");
  const [reviews, setReviews] = useState("");
  const [isRead, setIsRead] = useState("");
  const [currentRead, setCurrentRead] = useState("");
  const navigate = useNavigate();

  const handleAddTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleAddAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleAddImage = (event) => {
    setImage(event.target.value);
  };
  const handleAddPublished = (event) => {
    setPublished(event.target.value);
  };
  const handleAddDescription = (event) => {
    setDescription(event.target.value);
  };
  const handleAddGenre = (event) => {
    setGenre(event.target.value);
  };
  const handleAddReviews = (event) => {
    setReviews(event.target.value);
  };
  const handleAddIsRead = (event) => {
    setIsRead(event.target.value);
  };
  const handleAddCurrentRead = (event) => {
    setCurrentRead(event.target.value);
  };

  const isFormValid = () => {
    if (!title || !author || !image) {
      return false;
    }
    return true;
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      toast.success("Your book was successfully uploaded!", {
        position: "top-center",
      });
      setTimeout(() => navigate("/books"), 3000);
    } else {
      toast.error("Book upload failed!, you have errors in your form", {
        position: "top-center",
      });
    }
  };

  return (
    <section>
      <h1 className="upload__form--heading">Add a New Book</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className="upload__form">
        <div className="upload__inputs">
          <div className="upload__title--container upload__container">
            <h2 className="upload__title--label upload__label ">Book Title</h2>
            <FormField
              eventHandler={handleAddTitle}
              value={title}
              componentClass="upload__title"
              name="title"
              type="text"
              placeholder="Add book title"
            />
          </div>
          <div className="upload__author--container upload__container">
            <h2 className="upload__author--label upload__label">
              Add the Book's Author
            </h2>
            <FormField
              eventHandler={handleAddAuthor}
              value={author}
              componentClass="upload__author"
              name="author"
              type="text"
              placeholder="Add book author"
            />
          </div>
          <div className="upload__image--container upload__container">
            <h2 className="upload__image--label upload__label">Book Image</h2>
            <FormField
              eventHandler={handleAddImage}
              value={image}
              componentClass="upload__Image"
              name="image"
              type="text"
              placeholder="Add a URL to book image"
            />
          </div>
          <div className="upload__published__container upload__container">
            <h2 className="upload__published--label upload__label">
              When was the book published?
            </h2>
            <FormField
              eventHandler={handleAddPublished}
              value={published}
              componentClass="upload__published"
              name="title"
              type="text"
              placeholder="Add published date"
            />
          </div>
          <div className="upload__description--container upload__container">
            <h2 className="upload__description--label upload__label">
              Add a brief summary of the book
            </h2>
            <FormField
              eventHandler={handleAddDescription}
              value={description}
              componentClass="upload__description"
              name="description"
              type="text"
              placeholder="Add book description"
            />
          </div>
          <div className="uploa__genre--container upload__container">
            <h2 className="upload__genre--label upload__label">
              Add the Book's Genre
            </h2>
            <FormField
              eventHandler={handleAddGenre}
              value={genre}
              componentClass="upload__genre"
              name="genre"
              type="text"
              placeholder="Add book genre"
            />
          </div>
          <div className="upload__reviews--container upload__container">
            <h2 className="upload__reviews--label upload__label">
              What did you think of the book?
            </h2>
            <FormField
              eventHandler={handleAddReviews}
              value={reviews}
              componentClass="upload__reviews"
              name="reviews"
              type="text"
              placeholder="Add your review of the book"
            />
          </div>
          <div className="upload__status--container upload__container">
            <h2 className="upload__status-label upload__label">
              Have you read the book?(true/false)
            </h2>
            <FormField
              eventHandler={handleAddIsRead}
              value={isRead}
              componentClass="upload__status"
              name="readStatus"
              type="text"
              placeholder="Add read status true or false"
            />
          </div>
          <div className="upload__current--container upload__container">
            <h2 className="upload__current--label upload__label">
              Are you currently reading the book? (true/false)
            </h2>
            <FormField
              eventHandler={handleAddCurrentRead}
              value={currentRead}
              componentClass="upload__current"
              name="title"
              type="text"
              placeholder="Add currently reading true or false)"
            />
          </div>
        </div>
        <div className="upload__btn-container upload__container">
          <img
            src={uploadIcon}
            alt="add book icon"
            className="upload__btn-icon"
          />
          <CTA componentClass="upload-book__button" componentText="ADD BOOK" />
        </div>
      </form>
    </section>
  );
}
export default AddBookForm;
