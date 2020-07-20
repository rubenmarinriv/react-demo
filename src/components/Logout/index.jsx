import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// Components
import Loader from '../Loader';

const Logout = (props) => {
  const { logout } = props;
  const history = useHistory();

  // Logout and redirect user to Home
  logout(() => {
    history.replace('/');
  });

  return (
    <div className="Logout">
      <Loader show />
    </div>
  );
};

// Validate data types
Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Logout;
