import { FETCH_PHOTO, LOAD_MORE, SEARCH } from './types.js';
import axios from 'axios';

const clientId = 'bb09aa87e9f9340f1d5537f4f4c5649c1bd9c456d055b12fd76629cecceaa73a';
const clientId2 = 'bbd9a8b273051e131270739a60032859d43abf7d44b4865cefae2d2c586487a0';

export function fetchPhoto(){
  return function(dispatch) {
    axios.get(`https://api.unsplash.com/photos/?page=1&per_page=9&client_id=${clientId}`)
      .then(response => {
        dispatch({ type: FETCH_PHOTO, data: response.data });
      }).catch(error => {
        console.error('Error:', error);
      });
  };
}

export function loadMore(pageId = 1) {
  return dispatch => {
    axios.get(`https://api.unsplash.com/photos/?page=${pageId}&per_page=9&client_id=${clientId}`)
      .then(response => {
        dispatch({ type: LOAD_MORE, data: response.data });
      }).catch(error => {
        console.error('Error:', error);
      });
  };
}


export function search(term) {
  return dispatch => {
    axios.get(`https://api.unsplash.com/photos/?page=1&per_page=9&query=${term}&client_id=${clientId}`).then(response => {
      dispatch({ type: SEARCH, term: response.data });
    }).catch(error => {
      console.error(error);
    });
  };
}
