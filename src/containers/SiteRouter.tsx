import About from './About';
import User from './User';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import BookDetail from './books/BookDetail';
import Books from './books/Books';
import NavBar from '../components/NavBar';
import Datasheet from './Datasheet';
import Reservation from './Reservation';

const SiteRouter = () => {
  return (
    <Router>
      <NavBar />
      <Container className="pageContainer">
        <Switch>
          <Route exact path="/books/:bookID">
            <BookDetail/>
          </Route>
          <Route exact path="/datasheet">
            <Datasheet/>
          </Route>
          <Route exact path="/reservation">
            <Reservation/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/user">
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