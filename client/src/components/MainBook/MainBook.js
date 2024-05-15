import './MainBook.scss';

export default function MainBook() {
  return (
    <section className='book-details'>
      <h2 className='book-details__title'>title</h2>
      <img src="" alt="" className='book-details__image'></img>
      <div className='book-details__property'>
        <h3 className='book-details__subheading'>AUTHOR</h3>
        <span className='book-details__detail'>author</span>
      </div>
      <div className='book-details__property'>
        <h3 className='book-details__subheading'>PUBLISH YEAR</h3>
        <span className='book-details__detail'>published</span>
      </div>
      <div className='book-details__property'>
        <h3 className='book-details__subheading'>GENRE</h3>
        <span className='book-details__detail'>genre</span>
      </div>
      <div className='book-details__property'>
        <h3 className='book-details__subheading'>DESCRIPTION</h3>
        <span className='book-details__detail'>description</span>
      </div>
      <div className='book-details__property'>
        <h3 className='book-details__subheading'>REVIEW</h3>
        <span className='book-details__detail'>author</span>
      </div>
      <div className='book-details__buttons'>
        <button className='book-details__read book-details__read--true'>Read</button>
        <button className='book-details__current'>Set current read</button>
      </div>
    </section>
  )
}