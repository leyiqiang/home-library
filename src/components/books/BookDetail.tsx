import { useSelector } from 'react-redux';
import { selectBooksByCategory } from '../../store/books/booksSlice';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const BookDetail = () => {
  const bookListByCategory = useSelector(selectBooksByCategory);
  return (
    <h1>
      Test
    </h1>
  );
}

export default BookDetail;
