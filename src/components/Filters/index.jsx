import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { Search } from 'react-bootstrap-icons';

// Actions
import { setOrder, setSearch } from '../../actions';

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  setOrder: (newOrder) => dispatch(setOrder(newOrder)),
  setSearch: (newSearch) => dispatch(setSearch(newSearch)),
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

  // Search using title or summary
  const handleSearch = (e) => {
    const { setSearch: setNewSearch } = props;
    const { currentTarget } = e;
    const { value } = currentTarget;

    setNewSearch(value);
  };

  return (
    <Row className="mb-3">
      <Col
        style={{
          display: 'flex',
          alignItems: 'center',
        }}
      >
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
      <Col xs={12} sm={6}>
        <Form inline className="float-sm-right">
          <Button
            variant="outline-success"
            style={{
              position: 'absolute',
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              pointerEvents: 'none',
            }}
          >
            <Search color="black" />
          </Button>
          <FormControl
            type="text"
            placeholder="Search"
            className="pl-5"
            onKeyUp={(e) => handleSearch(e)}
          />
        </Form>
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
  setSearch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
