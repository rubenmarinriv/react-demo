import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import { Search } from 'react-bootstrap-icons';

// Actions
import { setOrder, setSearch } from '../../actions';

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  setOrder: (newOrder) => dispatch(setOrder(newOrder)),
  setSearch: (newSearch) => dispatch(setSearch(newSearch)),
});

function Filters(props) {
  const { state, setSearch: setNewSearch } = props;
  const { order, search, content } = state;
  let searchInput = null;
  // Apply search
  const searchedContent = search === '' ? content
    : _.filter(content, (element) => (
      element.title.toLowerCase().includes(search.toLowerCase())
      || element.summary.toLowerCase().includes(search.toLowerCase())
    ));

  const handleSuggestion = (e) => {
    const { type, keyCode, currentTarget } = e;

    if (type === 'click' || keyCode === 13) {
      const { innerText } = currentTarget;

      searchInput.value = innerText;
      setNewSearch(innerText);
    }
  };

  const listItems = searchedContent.map((element) => (
    <ListGroup.Item
      key={element.id}
      tabIndex={0}
      style={{
        padding: '.375rem .75rem',
        cursor: 'pointer',
      }}
      onClick={(e) => handleSuggestion(e)}
    >
      {element.title}
    </ListGroup.Item>
  ));

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
        <Button
          variant="primary"
          onClick={(e) => handleSort(e)}
          onKeyDown={(e) => handleSort(e)}
        >
          Sort
          {' '}
          {order === 'asc' ? '▲' : '▼'}
        </Button>
      </Col>
      <Col xs={12} sm={6}>
        <Form
          inline
          className="float-sm-right"
          style={{
            position: 'relative',
          }}
        >
          <span
            style={{
              position: 'absolute',
              padding: '.375rem .75rem',
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              pointerEvents: 'none',
            }}
          >
            <Search color="black" />
          </span>
          <FormControl
            type="text"
            placeholder="Search"
            className="pl-5"
            ref={(input) => { searchInput = input; }}
            onKeyUp={(e) => handleSearch(e)}
          />
          {search !== ''
            && (
            <ListGroup
              style={{
                position: 'absolute',
                top: '100%',
                width: '100%',
                zIndex: 1,
              }}
            >
              {listItems}
            </ListGroup>
            )}
        </Form>
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
  setOrder: PropTypes.func.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
