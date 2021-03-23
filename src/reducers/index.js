import { combineReducers } from "redux";

import musicReducer from "./MusicReducer";
import bandReducer from "./BandReducer";
import albumReducer from "./AlbumReducer";

export default combineReducers({
  musicReducer,
  bandReducer,
  albumReducer,
});
