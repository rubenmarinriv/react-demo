import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Row, Col, Media } from 'react-bootstrap';

// Components
import Details from './Details';

// Redux state
const mapStateToProps = (state) => ({ state });

const Content = (props) => {
  const { state, isAuthenticated } = props;

  const [details, setDetails] = useState({
    id: 0,
    title: '',
    summary: '',
    year: 0,
    time: '',
    genres: [],
    img: '',
    directors: [],
    stars: [],
    rating: 0,
    votes: 0,
    show: false,
  });

  // Order content
  const sortedContent = state.order === '' ? state.content
    : _.orderBy(state.content, 'title', state.order);

  // Apply 'genre' filter
  const filteredByGenre = state.genre === '' ? sortedContent
    : sortedContent.filter((element) => element.genres.includes(state.genre));

  // Apply 'type' filter
  const filteredByType = state.type === '' ? filteredByGenre
    : filteredByGenre.filter((element) => element.type.includes(state.type.toLowerCase()));

  // Filter by current search
  const searchedContent = state.search === '' ? filteredByType
    : _.filter(filteredByType, (element) => (
      element.title.toLowerCase().includes(state.search.toLowerCase())
    ));

  // Open content details
  const handleShow = (e, element) => {
    const { type, keyCode } = e;

    if (type === 'click' || keyCode === 13) {
      setDetails({
        ...element,
        show: true,
      });
    }
  };

  // Close content details
  const handleClose = () => {
    setDetails({
      ...details,
      show: false,
    });
  };

  // Update content details
  const handleUpdate = (id) => {
    const index = id - 1;

    setDetails({
      ...state.content[index],
      show: true,
    });
  };

  // Create content after being filtered
  const content = searchedContent.map((element) => (
    <Col key={element.id} xs={6} md={3} lg={2} className="mb-3">
      <Media
        tabIndex={0}
        style={{
          cursor: 'pointer',
        }}
        onClick={(e) => handleShow(e, element)}
        onKeyDown={(e) => handleShow(e, element)}
      >
        <img key={element.id} width="100%" height="auto" src={element.img} alt={element.title} />
      </Media>
    </Col>
  ));

  return (
    <Row className="Content">
      <Details
        details={details}
        close={handleClose}
        isAuthenticated={isAuthenticated}
        update={handleUpdate}
      />
      {content}
    </Row>
  );
};

// Validate data types
Content.propTypes = {
  state: PropTypes.shape({
    order: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

// Connect Redux state to Content props
export default connect(mapStateToProps)(Content);
