import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar, Nav, Container } from 'react-bootstrap';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';

// Redux actions
import { setContent } from './actions';

/*
 * Movie and series data
 *
 * If we had a backend we would make a request to the server
 * to get the data using fetch or some module like axios
 */
import content from './data/content.json';

// Components
import Home from './components/Home';
import Login from './components/Login';

const mapDispatchToProps = (dispatch) => ({
  setContent: (newContent) => dispatch(setContent(newContent)),
});

function App(props) {
  useEffect(() => {
    const { setContent: setNewContent } = props;

    // Set "fetched" movie and series data in Redux store
    setNewContent(content);
  });

  return (
    <div className="App">
      <Router>
        <Navbar
          className="mb-3"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark"
        >
          <Container>
            <Navbar.Brand>
              <Link
                to="/"
                style={{
                  color: 'white',
                }}
              >
                ACME
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto" />
              <Nav>
                <Link
                  to="/login"
                  style={{
                    color: 'white',
                  }}
                >
                  Login
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

App.propTypes = {
  setContent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
