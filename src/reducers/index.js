import { combineReducers } from "redux";

import musicReducer from "./MusicReducer";
import bandReducer from "./BandReducer";

export default combineReducers({
  musicReducer,
  bandReducer,
});
