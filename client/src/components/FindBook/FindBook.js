import './FindBook.scss';

export default function FindBook() {
  const genres = [
    "Adult",
    "Autobiography",
    "Biography",
    "Children",
    "Fiction", 
    "Historical",
    "Nonfiction", 
    "Romance",
  ]
  
  return (
    <form id='find-book' className='find-form'>
      <label htmlFor='genre' className='find-form__label'>Find books by genre:</label>
      <select id='genre' name='genre' className='find-form__select'>
        <option value=''>Select genre...</option>
        {genres.map((genre, index) => {
          return (<option value={genre} key={index}>{genre}</option>)
        })}
      </select>
    </form>
  )
}