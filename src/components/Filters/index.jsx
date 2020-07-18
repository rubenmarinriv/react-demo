import React from 'react';
import { Row, Col } from 'react-bootstrap';

// Components
import Sort from './Sort';
import Dropdown from './Dropdown';
import SearchBar from './SearchBar';

function Filters() {
  return (
    <Row className="mb-3">
      <Col xs={4} md={2}>
        <Sort />
      </Col>
      <Col xs={4} md={2}>
        <Dropdown
          defaultText="Genre"
          optionsKey="genres"
        />
      </Col>
      <Col xs={4} md={2}>
        <Dropdown
          defaultText="Type"
          optionsKey="type"
        />
      </Col>
      <Col xs={12} md={6}>
        <SearchBar />
      </Col>
    </Row>
  );
}

export default Filters;
