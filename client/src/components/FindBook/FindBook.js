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
      <label for='genre' className='find-form__label'>Find books by genre:</label>
      <select id='genre' name='genre' className='find-form__select'>
        <option value=''>Select genre...</option>
        {genres.map(genre => {
          return (<option value={genre}>{genre}</option>)
        })}
      </select>
    </form>
  )
}