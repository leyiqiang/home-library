import { useSelector } from 'react-redux';
import { selectBooksByCategory } from '../../store/books/booksSlice';

const BookList = () => {
  const bookListByCategory = useSelector(selectBooksByCategory);
  return (
    <div>
      {bookListByCategory.map((b, idx) => {
        return <div>
          {b.name}
        </div>
      })}
    </div>
  );
}

export default BookList;
