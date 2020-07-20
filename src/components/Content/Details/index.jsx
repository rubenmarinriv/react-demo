import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Modal, Media, Row, Col,
} from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

// Redux actions
import { setRating } from '../../../actions';

const mapDispatchToProps = (dispatch) => ({
  setRating: (newRating, id) => dispatch(setRating(newRating, id)),
});

function Details(props) {
  const {
    details, close, isAuthenticated, setRating: setNewRating,
  } = props;

  const handleChangeRating = (newRating, id) => {
    const { update } = props;

    setNewRating(newRating, id);
    update(id);
  };

  return (
    <Modal
      className="Details"
      size="lg"
      centered
      show={details.show}
      onHide={close}
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {details.title}
          {' '}
          (
          {details.year}
          )
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col md={4}>
            <Media>
              <img
                key={details.id}
                width="100%"
                height="auto"
                src={details.img}
                alt={details.title}
              />
            </Media>
          </Col>
          <Col md={8} className="mt-3 mb-3">
            <Col>
              <span className="font-weight-bold">Length:</span>
              {' '}
              <time>{details.time}</time>
            </Col>
            {details.genres.length > 0 && (
              <Col>
                <span className="font-weight-bold">
                  {details.genres.length > 1 ? 'Genres' : 'Genre'}
                  :
                </span>
                {' '}
                {details.genres.join(', ')}
              </Col>
            )}
            <Col className="mt-3 mb-3">
              <p>{details.summary}</p>
            </Col>
            {details.directors.length > 0 && (
              <Col>
                <span className="font-weight-bold">
                  {details.directors.length > 1 ? 'Directors' : 'Director'}
                  :
                </span>
                {' '}
                {details.directors.join(', ')}
              </Col>
            )}
            {details.stars.length > 0 && (
              <Col>
                <span className="font-weight-bold">
                  {details.stars.length > 1 ? 'Stars' : 'Star'}
                  :
                </span>
                {' '}
                {details.stars.join(', ')}
              </Col>
            )}
            <Col className="mt-3 text-center text-md-left">
              {isAuthenticated ? (
                <StarRatings
                  rating={details.rating}
                  starDimension="24px"
                  starRatedColor="#ffc107"
                  numberOfStars={5}
                  starHoverColor="#0062cc"
                  changeRating={(newRating) => handleChangeRating(newRating, details.id)}
                />
              ) : (
                <StarRatings
                  rating={details.rating}
                  starDimension="24px"
                  starRatedColor="#ffc107"
                  numberOfStars={5}
                />
              )}
              {' '}
              {details.votes > 0 && `(${details.votes} ${details.votes > 1 ? 'votes' : 'vote'})`}
            </Col>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

Details.propTypes = {
  details: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    time: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    img: PropTypes.string.isRequired,
    directors: PropTypes.arrayOf(PropTypes.string).isRequired,
    stars: PropTypes.arrayOf(PropTypes.string).isRequired,
    rating: PropTypes.number.isRequired,
    votes: PropTypes.number.isRequired,
    show: PropTypes.bool.isRequired,
  }).isRequired,
  close: PropTypes.func.isRequired,
  update: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  setRating: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Details);
