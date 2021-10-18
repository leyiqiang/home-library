import { useSelector } from 'react-redux';
import { selectBooksByCategory } from '../../store/books/booksSlice';
import Filters from './Filters';
import './books.css'
import { Container, Row, Col } from 'react-bootstrap';

const Books = () => {
  const bookListByCategory = useSelector(selectBooksByCategory);
  return (
    <Container>
      <Row>
        <h1 className="headerNav">Books</h1>
      </Row>
      <Row>
        <Col sm={12} md={4}>
          <Filters/>
        </Col>
        <Col sm={12} md={8}>
          <div>
          <h1> Books Component</h1>
          </div>
        </Col>
      </Row>
    </Container>

  )
}

export default Books;
