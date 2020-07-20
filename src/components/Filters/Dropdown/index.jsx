import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { isArray, isString } from 'lodash';
import { Form } from 'react-bootstrap';

// Redux state
const mapStateToProps = (state) => ({ state });

const Dropdown = (props) => {
  const {
    state, defaultText, optionsKey, set,
  } = props;
  const values = [];

  // Capitalize the given string
  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // Get select option values from our content data
  state.content.forEach((element) => {
    if (typeof element[optionsKey] !== 'undefined') {
      if (isArray(element[optionsKey])) {
        element[optionsKey].forEach((genre) => {
          if (!values.includes(genre)) {
            values.push(genre);
          }
        });
      } else if (isString(element[optionsKey])) {
        if (!values.includes(capitalize(element[optionsKey]))) {
          values.push(capitalize(element[optionsKey]));
        }
      }
    }
  });

  // Handle select change
  const handleChange = (e) => {
    const { currentTarget } = e;
    let newValue = '';

    if (currentTarget.value !== defaultText) {
      newValue = currentTarget.value;
    }
    set(newValue);
  };

  // Create options from values
  const options = values.map((element) => (
    <option key={element} style={{ textTransform: 'capitalize' }}>
      {element}
    </option>
  ));

  return (
    <Form.Group>
      <Form.Control as="select" onChange={(e) => handleChange(e)}>
        <option>{defaultText}</option>
        {options}
      </Form.Control>
    </Form.Group>
  );
};

// Validate data types
Dropdown.propTypes = {
  state: PropTypes.shape({
    order: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  defaultText: PropTypes.string.isRequired,
  optionsKey: PropTypes.string.isRequired,
  set: PropTypes.func.isRequired,
};

// Connect Redux state to Dropdown props
export default connect(mapStateToProps)(Dropdown);
