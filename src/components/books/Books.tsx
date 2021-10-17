import { useSelector } from 'react-redux';
import { selectBooksByCategory } from '../../store/books/booksSlice';
import Filters from './Filters';
import './books.css'

const Books = () => {
  const bookListByCategory = useSelector(selectBooksByCategory);
  return (
    <div>
      <h1>Books</h1>
      <div className="booksContainer">
        <Filters/>
        <div className="booksContent">
          <h1> Books Component</h1>
        </div>
      </div>
    </div>

  )
}

export default Books;
