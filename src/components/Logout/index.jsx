import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function Logout(props) {
  const { logout } = props;
  const history = useHistory();

  logout(() => {
    history.push('/');
  });

  return null;
}

Logout.propTypes = {
  logout: PropTypes.func.isRequired,
};

export default Logout;
