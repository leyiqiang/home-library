import About from './About';
import User from '../components/User';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import BookDetail from '../components/books/BookDetail';
import BookList from '../components/books/BookList';
import Books from './books/Books';

const SiteRouter = () => {
  return (
    <Router>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand as={Link} to="">HomeLibrary</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="">Books</Nav.Link>
            <Nav.Link as={Link} to="/About">About</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/user"><FontAwesomeIcon icon={faUser}/> </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="pageContainer">
        <Switch>
          <Route exact path="/:bookId">
            <BookDetail/>
          </Route>
          <Route path="/about">
            <About/>
          </Route>
          <Route path="/user">
            <User/>
          </Route>
          <Route path="/">
            <Books/>
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default SiteRouter;
