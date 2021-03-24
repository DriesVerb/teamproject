import { combineReducers } from "redux";

import countryReducer from "./CountryReducer";
import bandReducer from "./BandReducer";
import searchByBandReducer from "./SearchByBandReducer";
import albumReducer from "./AlbumReducer";
import tracksReducer from "./TracksReducer";

export default combineReducers({
  countryReducer,
  bandReducer,
  searchByBandReducer,
  albumReducer,
  tracksReducer,
});
