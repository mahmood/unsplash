import { FETCH_PHOTO, LOAD_MORE, SEARCH, RANDOM_IMAGE, LOADING_PHOTO } from '../actions/types';

export default function (state = {isLoading: null}, action) {
  switch(action.type){
    case LOADING_PHOTO :
      return {...state, isLoading: action.isLoading};
    case FETCH_PHOTO :
      return {...state, photos: action.data };
    case LOAD_MORE :
      return {...state, photos: state.photos.concat(action.data) };
    case SEARCH :
      return {...state, photos: action.data.results};
    case RANDOM_IMAGE :
      return {...state, random: [action] };
    default:
      return state;
  }
}
