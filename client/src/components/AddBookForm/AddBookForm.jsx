import uploadIcon from "../../assets/Images/Icons/upload.svg";
import FormField from "../FormField/FormField";
import CTA from "../CTA/CTA";
import "./CommentForm.scss";

function CommentForm() {
  return (
    <form className="upload__form">
      <h1 className="upload__form--heading sub-header">Add a New Book</h1>
      <div className="upload__title--container">
        <h2 className="upload__title--label ">Book Title</h2>
        <FormField
          componentClass="upload__title"
          name="title"
          type="text"
          placeholder="Add book title"
        />
      </div>
      <div className="upload__author--container">
        <h2 className="upload__author--label">Add the Book's Author</h2>
        <FormField
          componentClass="upload__author"
          name="author"
          type="text"
          placeholder="Add book author"
        />
      </div>
      <div className="upload__image--container">
        <h2 className="upload__image--label">Book Image</h2>
        <FormField
          componentClass="upload__Image"
          name="image"
          type="text"
          placeholder="Add a URL to bok image"
        />
      </div>
      <div className="upload__published__container">
        <h2 className="upload__published--label">
          When was the book published?
        </h2>
        <FormField
          componentClass="upload__published"
          name="title"
          type="text"
          placeholder="Add published date"
        />
      </div>
      <div className="upload__description--container">
        <h2 className="upload__description--label">
          Add a brief summary of the book
        </h2>
        <FormField
          componentClass="upload__description"
          name="description"
          type="text"
          placeholder="Add book description"
        />
      </div>
      <div className="uploa__genre--container">
        <h2 className="upload__genre--label">Add the Book's Genre</h2>
        <FormField
          componentClass="upload__genre"
          name="genre"
          type="text"
          placeholder="Add book genre"
        />
      </div>
      <div className="upload__reviews--container">
        <h2 className="upload__reviews--label">
          What did you think of the book?
        </h2>
        <FormField
          componentClass="upload__reviews"
          name="reviews"
          type="text"
          placeholder="Add your review of the book"
        />
      </div>
      <div className="upload__status--container">
        <h2 className="upload__status-label">
          Have you read the book?(true/false)
        </h2>
        <FormField
          componentClass="upload__status"
          name="readStatus"
          type="text"
          placeholder="Add read status true or false"
        />
      </div>
      <div className="upload__current--container">
        <h2 className="upload__current--label">
          Are you currently reading the book? (true/false)
        </h2>
        <FormField
          componentClass="upload__current"
          name="title"
          type="text"
          placeholder="Add currently reading true or false)"
        />
      </div>

      <div className="upload__btn-container">
        <img
          src={uploadIcon}
          alt="add book icon"
          className="upload__btn-icon"
        />
        <CTA componentClass="upload-book__button" componentText="ADD BOOK" />
      </div>
    </form>
  );
}
export default CommentForm;
