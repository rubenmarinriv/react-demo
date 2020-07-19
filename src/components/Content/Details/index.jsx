import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Media, Row, Col,
} from 'react-bootstrap';

function Details(props) {
  const { details, close } = props;

  return (
    <Modal
      className="Details"
      size="lg"
      centered
      show={details.show}
      onHide={() => close(details)}
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
    show: PropTypes.bool.isRequired,
  }).isRequired,
  close: PropTypes.func.isRequired,
};

export default Details;
