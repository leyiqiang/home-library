import './App.css';
import Books from './components/Books';
import About from './components/About';
import User from './components/User';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';

function SiteRouter() {
  return (
      <Router>
        <ul>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user">User</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/books">
            <Books/>
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
