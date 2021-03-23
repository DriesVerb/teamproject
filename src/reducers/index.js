import { combineReducers } from "redux";

import musicReducer from "./MusicReducer";
import bandReducer from "./BandReducer";
import AlbumReducer from "./AlbumReducer";

export default combineReducers({
  musicReducer,
  bandReducer,
  AlbumReducer
});
