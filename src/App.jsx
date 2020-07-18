import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

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
    <Container className="App mt-3">
      <Home />
    </Container>
  );
}

App.propTypes = {
  setContent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
