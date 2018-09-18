import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from './Login';
import LoginActions from '../../actions/login-actions';

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state) {
  return {
    isLoading: state.login.isLoading,
    isLoggedIn: state.login.isLoggedIn,
    status: state.login.status,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      login: LoginActions.login,
      dispatch,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
