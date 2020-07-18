import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Row, Col, Media } from 'react-bootstrap';

const mapStateToProps = (state) => ({ state });

function Content(props) {
  // Get and display movie and series data from Redux store
  const { state } = props;

  // Apply order
  const sortedContent = state.order === '' ? state.content
    : _.orderBy(state.content, 'title', state.order);

  // Apply genre filter
  const filteredByGenre = state.genre === '' ? sortedContent
    : sortedContent.filter((element) => element.genres.includes(state.genre));

  // Apply type filter
  const filteredByType = state.type === '' ? filteredByGenre
    : filteredByGenre.filter((element) => element.type.includes(state.type.toLowerCase()));

  // Apply search
  const searchedContent = state.search === '' ? filteredByType
    : _.filter(filteredByType, (element) => (
      element.title.toLowerCase().includes(state.search.toLowerCase())
    ));

  const content = searchedContent.map((element) => (
    <Col key={element.id} xs={6} md={3} lg={2} className="mb-3">
      <Media>
        <img
          key={element.id}
          width="100%"
          height="auto"
          src={element.img}
          alt={element.title}
        />
      </Media>
    </Col>
  ));

  return (
    <Row className="Content">
      {content}
    </Row>
  );
}

Content.propTypes = {
  state: PropTypes.shape({
    order: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(Content);
