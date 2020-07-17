import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Container from 'react-bootstrap/Container';

// Actions
import { setContent } from './actions';

/*
 * Movie and series data
 *
 * If we had a backend we would make a request to the server
 * to get the data using fetch or some package like axios
 */
import content from './data/content.json';

// Components
import Filters from './components/Filters';
import ContentList from './components/ContentList';

const mapDispatchToProps = (dispatch) => ({
  setContent: (newContent) => dispatch(setContent(newContent)),
});

function App(props) {
  useEffect(() => {
    const { setContent: setNewContent } = props;

    // Set movie and series data in Redux store
    setNewContent(content);
  });

  return (
    <Container
      className="App"
      style={{
        marginTop: '1rem',
        marginBottom: '1rem',
      }}
    >
      <Filters />
      <ContentList />
    </Container>
  );
}

App.propTypes = {
  setContent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
