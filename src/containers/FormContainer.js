import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import saveLocation from '../actions/locationActions';
import Form from '../components/Form'

const mapStateToProps = (state) => {
  return {};
};


// const mapDispatchToProps = dispatch => {
//   return bindActionCreators({ saveLocation }, dispatch);
// };

const mapDispatchToProps = (dispatch) => {
  return {
    saveLocation: (location) => {
      dispatch({
        type: 'SAVE_LOCATION',
        data: location,
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
