import './Hero.scss';

export default function Hero({books}) {
  console.log(books)

  const mainBook = books.find(book => book.currentRead === true )
  console.log(mainBook);




  return (
    <div className='hero'>
      <h2 className='hero__heading'>Current read:</h2>
      <img src='' alt='' className='hero__image'></img>
      <div className='hero__content'>
        <p className='hero__info'><span className='hero__subheading'>Title: </span>title</p>
        <p className='hero__info'><span className='hero__subheading'>Author: </span>author</p>
        <p className='hero__info'><span className='hero__subheading'>Desciprtion: </span>desciprtion</p>
      </div>
    </div>
  )
}