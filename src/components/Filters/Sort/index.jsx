import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import { CaretUpFill, CaretDownFill } from 'react-bootstrap-icons';

// Redux actions
import { setOrder } from '../../../actions';

// Redux state
const mapStateToProps = (state) => ({ state });

// Redux dispatchers
const mapDispatchToProps = (dispatch) => ({
  setOrder: (newOrder) => dispatch(setOrder(newOrder)),
});

function Sort(props) {
  const { state } = props;

  // Alphabetically sort by 'title'
  const handleSort = () => {
    const { setOrder: setNewOrder } = props;
    let newOrder = '';

    if (state.order === 'asc') {
      newOrder = 'desc';
    } else {
      newOrder = 'asc';
    }
    setNewOrder(newOrder);
  };

  return (
    <Button variant="primary" onClick={handleSort}>
      Sort
      {' '}
      {state.order === 'asc'
        ? <CaretUpFill color="white" />
        : <CaretDownFill color="white" />}
    </Button>
  );
}

// Validate data types
Sort.propTypes = {
  state: PropTypes.shape({
    order: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  setOrder: PropTypes.func.isRequired,
};

// Connect Redux state and dispatchers to Sort props
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
