import { combineReducers } from "redux";
import youTubeLinkReducer from './YouTubeLinkReducer';
import musicReducer from "./MusicReducer";
import bandReducer from "./BandReducer";
import albumReducer from "./AlbumReducer";

export default combineReducers({
  musicReducer,
  bandReducer,
  youTubeLinkReducer,

  albumReducer,
});
