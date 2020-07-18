import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Form } from 'react-bootstrap';
import { isArray, isString } from 'lodash';

const mapStateToProps = (state) => ({ state });

function Dropdown(props) {
  const { state, defaultText, optionsKey } = props;
  const values = [];

  const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  // Get select options
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

  const options = values.map((element) => (
    <option
      key={element}
      style={{
        textTransform: 'capitalize',
      }}
    >
      {element}
    </option>
  ));

  return (
    <Form.Group>
      <Form.Control as="select">
        <option>{defaultText}</option>
        {options}
      </Form.Control>
    </Form.Group>
  );
}

Dropdown.propTypes = {
  state: PropTypes.shape({
    order: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.object).isRequired,
  }).isRequired,
  defaultText: PropTypes.string.isRequired,
  optionsKey: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(Dropdown);
