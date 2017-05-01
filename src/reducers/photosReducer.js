import { FETCH_PHOTO, LOAD_MORE } from '../actions/types';

export default function (state = [], action) {
  switch(action.type){
    case FETCH_PHOTO :
      return {...state, photos: action.data };
    case LOAD_MORE :
      return {...state, photos: state.photos.concat(action.data) };
    default:
      return state;
  }
}
