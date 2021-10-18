import Filters from './Filters';
import './books.css'
import { Container, Row, Col } from 'react-bootstrap';
import BookList from './BookList';

const Books = () => {
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
            <BookList/>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Books;
