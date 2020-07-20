import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Row, Col } from 'react-bootstrap';

// Redux actions
import { setGenre, setType } from '../../actions';

// Components
import Sort from './Sort';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';

// Redux dispatchers
const mapDispatchToProps = (dispatch) => ({
  setGenre: (newGenre) => dispatch(setGenre(newGenre)),
  setType: (newType) => dispatch(setType(newType)),
});

const Filters = (props) => {
  const { setGenre: setNewGenre, setType: setNewType } = props;

  return (
    <Row className="Filters mb-3 mb-md-0">
      <Col xs={4} md={2}>
        <Sort />
      </Col>
      <Col xs={4} md={2}>
        <Dropdown defaultText="Genre" optionsKey="genres" set={setNewGenre} />
      </Col>
      <Col xs={4} md={2}>
        <Dropdown defaultText="Type" optionsKey="type" set={setNewType} />
      </Col>
      <Col xs={12} md={6}>
        <SearchBar />
      </Col>
    </Row>
  );
};

// Validate data types
Filters.propTypes = {
  setGenre: PropTypes.func.isRequired,
  setType: PropTypes.func.isRequired,
};

// Connect dispatchers to Filters props
export default connect(null, mapDispatchToProps)(Filters);
