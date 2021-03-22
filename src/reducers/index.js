import { combineReducers } from "redux";

import musicReducer from "./MusicReducer";
import albumReducer from './AlbumReducer';

export default combineReducers({
  musicReducer,
  albumReducer
});
