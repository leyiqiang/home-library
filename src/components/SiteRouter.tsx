import '../App.css';
import About from './About';
import User from './User';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import BookDetail from './books/BookDetail';

const SiteRouter = () => {
  return (
    <Router>
      <Navbar bg="light" variant="light">
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
      </Switch>
    </Router>
  );
}

export default SiteRouter;
