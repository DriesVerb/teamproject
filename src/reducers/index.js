import { combineReducers } from "redux";

import musicReducer from "./MusicReducer";
import bandReducer from "./BandReducer";
import searchByBandReducer from "./SearchByBandReducer";
import albumReducer from "./AlbumReducer";
import tracksReducer from "./TracksReducer";

export default combineReducers({
  musicReducer,
  bandReducer,
  searchByBandReducer,
  albumReducer,
  tracksReducer,
});
