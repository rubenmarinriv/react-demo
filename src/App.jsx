import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import storeContent from './actions';

/*
 * Movie and series data
 *
 * If we had a backend we would make a request to the server
 * to get the data using fetch or some package like axios
 */
import content from './data/content.json';

// Components
import ContentList from './components/ContentList';

const mapDispatchToProps = (dispatch) => ({
  storeContent: (newContent) => dispatch(storeContent(newContent)),
});

function App(props) {
  useEffect(() => {
    const { storeContent: newContent } = props;

    // Set movie and series data in Redux store
    newContent(content);
  });

  return (
    <div className="App">
      <ContentList />
    </div>
  );
}

App.propTypes = {
  storeContent: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(App);
