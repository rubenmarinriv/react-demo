import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'react-bootstrap';

// Components
import Loader from '../Loader';
import Filters from '../Filters';
import Content from '../Content';

const mapStateToProps = (state) => ({ state });

function Home(props) {
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
}
Home.propTypes = {
  state: PropTypes.shape({
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps)(Home);
