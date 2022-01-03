import { useSelector } from 'react-redux';
import { selectBooksByCategory } from '../../store/books/booksSlice';
import { Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const BookList = () => {
  const bookListByCategory = useSelector(selectBooksByCategory);
  return (
    <Row xs={1} md={3} className='g-4'>
      {bookListByCategory.map((b, idx) => {
        return (
          <Col key={idx}>
            <Card>
              <Card.Img variant="top" src='https://picsum.photos/200/300' className='bookImage'/>
              <Card.Body>
                <Card.Title><Link to={'/books/' + b.id}>{b.title}</Link></Card.Title>
                {/*<Card.Subtitle>{b.category}</Card.Subtitle>*/}
                <Card.Text>
                  {b.author}
                </Card.Text>
                <footer className="text-muted">
                  {b.category}
                </footer>
              </Card.Body>
            </Card>
          </Col>)
      })}
    </Row>
  );
}

export default BookList;
