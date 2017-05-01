 import { combineReducers } from 'redux';
 import photosReducer from './photosReducer';

 export default combineReducers({
  home: photosReducer
 });
