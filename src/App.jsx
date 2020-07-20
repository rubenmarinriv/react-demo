import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import {
  Navbar, Nav, Container,
} from 'react-bootstrap';

// Redux actions
import { setContent } from './actions';

/*
 * Movie and series data
 *
 * If we had a backend we would make a request to the server
 * using fetch or axios and we would handle possible errors
 * using an Alert component
 */
import content from './data/content.json';

// Components
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';

// Redux dispatchers
const mapDispatchToProps = (dispatch) => ({
  setContent: (newContent) => dispatch(setContent(newContent)),
});

const App = (props) => {
  // Handle "auth" in App using useState Hook, false by default
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  /*
   * Set "fetched" movie and series data in Redux store once
   * App is mounted
   */
  useEffect(() => {
    const { setContent: setNewContent } = props;

    setTimeout(() => {
      setNewContent(content);
    }, 100); // Simulate delay
  }, []);

  // Simulate auth
  const fakeAuth = {
    login(cb) {
      setIsAuthenticated(true);
      setTimeout(cb, 100);
    },
    logout(cb) {
      setIsAuthenticated(false);
      setTimeout(cb, 100);
    },
  };

  return (
    <div className="App">
      <Router>
        <Navbar className="mb-3" collapseOnSelect expand="md" bg="dark" variant="dark" style={{ zIndex: 2 }}>
          <Container>
            <Navbar.Brand>
              <Link to="/" style={{ color: 'white' }}>ACME</Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto" />
              <Nav>
                { !isAuthenticated && (
                  <Link className="nav-link" to="/login" style={{ color: 'white' }}>Login</Link>
                )}
                { isAuthenticated && (
                  <Link className="nav-link" to="/logout" style={{ color: 'white' }}>Logout</Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home isAuthenticated={isAuthenticated} />
          </Route>
          <Route path="/login">
            <Login login={fakeAuth.login} />
          </Route>
          <Route path="/logout">
            <Logout logout={fakeAuth.logout} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

// Validate data types
App.propTypes = {
  setContent: PropTypes.func.isRequired,
};

// Connect dispatchers to App props
export default connect(null, mapDispatchToProps)(App);
