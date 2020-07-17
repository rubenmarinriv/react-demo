import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// Actions
import { setOrder } from '../../actions';

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  setOrder: (newOrder) => dispatch(setOrder(newOrder)),
});

function Filters(props) {
  const { state } = props;
  const { order } = state;

  // Alphabetically sort using title
  const handleSort = (e) => {
    const { type, keyCode } = e;

    if (type === 'click' || keyCode === 13) {
      const { setOrder: setNewOrder } = props;
      let newOrder = '';

      if (order === 'asc') {
        newOrder = 'desc';
      } else {
        newOrder = 'asc';
      }

      setNewOrder(newOrder);
    }
  };

  return (
    <Row
      style={{
        marginBottom: '1rem',
      }}
    >
      <Col>
        <span
          role="button"
          tabIndex={0}
          onClick={(e) => handleSort(e)}
          onKeyDown={(e) => handleSort(e)}
        >
          Sort
          {' '}
          {order === 'asc' ? '▼' : '▲'}
        </span>
      </Col>
    </Row>
  );
}

Filters.propTypes = {
  state: PropTypes.shape({
    order: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  setOrder: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
