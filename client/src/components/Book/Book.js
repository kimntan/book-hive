import './Book.scss';

export default function Book({ title, author, imageUrl }) {
  return (
    <div className='books'>
      <button className="book__button">
        <img src={imageUrl} alt={title} className="book__image" />
      </button>
      <div className='book__details'>
        {/* <h3>{title}</h3>
        <p>{author}</p> */}
      </div>

    </div>
  )
}