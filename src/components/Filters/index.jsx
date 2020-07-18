import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-bootstrap';

// Components
import Sort from './Sort';
import SearchBar from './SearchBar';

function Filters() {
  return (
    <Row className="mb-3">
      <Col
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Sort />
      </Col>
      <Col xs={12} sm={6}>
        <SearchBar />
      </Col>
    </Row>
  );
}

Filters.propTypes = {
  state: PropTypes.shape({
    order: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default Filters;
