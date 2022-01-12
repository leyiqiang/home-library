import { useDispatch, useSelector } from 'react-redux';
import { Card, Col, Row, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';
import { STATUS } from '../../utils/constants';
import { allBooks } from '../../store/books/booksActions';
import { selectBooksByCategory, selectError, selectStatus } from '../../store/books/booksSelectors';

const BookList = () => {
  const dispatch = useDispatch();
  const bookListByCategory = useSelector(selectBooksByCategory);
  const bookStatus = useSelector(selectStatus);
  const error = useSelector(selectError);


  useEffect(() => {
    dispatch(allBooks());
  }, [])

  let content : JSX.Element | undefined;
  if (bookStatus === STATUS.LOADING) {
    content =
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
  } else if (bookStatus === STATUS.IDLE && !error) {
    content =
      <>
        <Row xs={1} md={3} className="g-4">
          {bookListByCategory.map((b) => {
            return (
              <Col key={b._id}>
                <Card>
                  <Card.Img variant="top" src="https://picsum.photos/200/300" className="bookImage"/>
                  <Card.Body>
                    <Card.Title><Link to={'/books/' + b._id}>{b.title}</Link></Card.Title>
                    <Card.Text>
                      Author: {b.author || "unknown"}
                    </Card.Text>
                    <footer className="text-muted">
                      Category: {b.category || "unknown"}
                    </footer>
                  </Card.Body>
                </Card>
              </Col>)
          })}
        </Row>
      </>;
  } else if (error) {
    content = <p>Oops, something went wrong: {error}</p>;
  }
  return (
    <>
      {content}
    </>
  );
}

export default BookList;
