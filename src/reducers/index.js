import { combineReducers } from "redux";

import musicReducer from "./MusicReducer";
import bandReducer from "./BandReducer";
import searchByBandReducer from "./SearchByBandReducer";

export default combineReducers({
  musicReducer,
  bandReducer,
  searchByBandReducer,
});
