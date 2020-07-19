import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Navbar, Nav, Container } from 'react-bootstrap';

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
    <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">ACME</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/logout">Logout</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container className="App mt-3">
        <Home />
      </Container>
    </>
  );
}

App.propTypes = {
  setContent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
