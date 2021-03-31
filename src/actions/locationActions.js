require('isomorphic-fetch');

const storeAllLocations = (locations) => {
  return {
    type: 'STORE_LOCATIONS',
    data: locations.locations,
  };
};

// export const saveLocation = (location) => {
//   return {
//     type: 'SAVE_LOCATION',
//     data: location
//   }
// }

// export const saveLocation = (location) => {
//   console.log('it called')
//   return (dispatch) => {
//     return fetch('/locations', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify(location)
//     })
//     .then(locations => locations.json())
//     .then(data => {
//       console.log('Success:', data)
//     // .then(json => dispatch(storeAllLocations(json)));
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
//   };
// };

const fetchAllLocations = () => {
  return (dispatch) => {
    return fetch('/locations', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(locations => locations.json())
      .then(json => dispatch(storeAllLocations(json)));
  };
};



export default fetchAllLocations;
