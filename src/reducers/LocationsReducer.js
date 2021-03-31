import saveLocation from '../actions/locationActions'

const initialState = {
  data: [],
};

const Locations = (state = initialState, action) => {
  const { type, data } = action;

  switch (type) {
    case 'STORE_LOCATIONS':
      return Object.assign({}, state, {
        data: state.data.concat(data),
      });
    case 'SAVE_LOCATION':
      return Object.assign({}, state, {
        data: state.data.concat(data),
      });
    default:
      return state;
  }
};

export default Locations;
