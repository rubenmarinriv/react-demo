import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

function Loader(props) {
  const { show } = props;

  return (
    <>
      { show && (
        <div className="Spinner">
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'white',
            zIndex: 1,
          }}
          >
            <Spinner
              animation="border"
              style={{
                width: '5rem',
                height: '5rem',
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}

Loader.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Loader;
