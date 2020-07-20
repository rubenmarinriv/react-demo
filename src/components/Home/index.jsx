import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

// Components
import Loader from '../Loader';
import Filters from '../Filters';
import Content from '../Content';

// Redux state
const mapStateToProps = (state) => ({ state });

const Home = (props) => {
  const { state, isAuthenticated } = props;

  return (
    <div className="Home">
      <Loader show={!(state.content.length > 0)} />
      <Container>
        <Filters />
        <Content isAuthenticated={isAuthenticated} />
      </Container>
    </div>
  );
};

// Validate data types
Home.propTypes = {
  state: PropTypes.shape({
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

// Connect Redux state to App props
export default connect(mapStateToProps)(Home);
