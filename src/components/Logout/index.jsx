import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

// Components
import Loader from '../Loader';

function Logout(props) {
  const { logout } = props;
  const history = useHistory();

  logout(() => {
    history.push('/');
  });

  return (
    <div className="Logout">
      <Loader />
    </div>
  );
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Logout;
