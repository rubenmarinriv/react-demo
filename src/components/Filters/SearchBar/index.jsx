import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Form, FormControl, ListGroup } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';

// Redux actions
import { setSearch } from '../../../actions';

const mapStateToProps = (state) => ({ state });

const mapDispatchToProps = (dispatch) => ({
  setSearch: (newSearch) => dispatch(setSearch(newSearch)),
});

function SearchBar(props) {
  const { state, setSearch: setNewSearch } = props;
  let searchInput = null;

  // Apply search
  const searchedContent = state.search === '' ? state.content
    : _.filter(state.content, (element) => (
      element.title.toLowerCase().includes(state.search.toLowerCase())
    ));

  const showSuggestions = (e) => {
    const { type, keyCode, currentTarget } = e;

    if (type === 'click' || keyCode === 13) {
      searchInput.value = currentTarget.innerText;
      setNewSearch(currentTarget.innerText);
    }
  };

  // Search by title
  const handleSearch = (e) => {
    const { currentTarget } = e;

    setNewSearch(currentTarget.value);
  };

  const suggestions = searchedContent.map((element) => (
    <ListGroup.Item
      key={element.id}
      tabIndex={0}
      style={{
        padding: '.375rem .75rem',
        cursor: 'pointer',
      }}
      onClick={(e) => showSuggestions(e)}
    >
      {element.title}
    </ListGroup.Item>
  ));

  return (
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
      {state.search !== '' && (
        <ListGroup
          style={{
            position: 'absolute',
            top: '100%',
            width: '100%',
            zIndex: 1,
          }}
        >
          {suggestions}
        </ListGroup>
      )}
    </Form>
  );
}

SearchBar.propTypes = {
  state: PropTypes.shape({
    order: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);