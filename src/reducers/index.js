import { combineReducers } from "redux";

import musicReducer from "./MusicReducer";
import AlbumReducer from "./AlbumReducer"
export default combineReducers({
  musicReducer,
  AlbumReducer,
});
