import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Discapacidad from './Discapacidad';

// eslint-disable-next-line no-unused-vars
function mapStateToProps(state) {
  return {
    //
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      dispatch
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discapacidad);
