const initialState = {
  startSearch: false,
  bandName: "oasis",
  bandInfo: [],
  error: null,
};

const searchByBandReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BAND":
      return {
        ...state,
        error: null,
        bandInfo: action.payload,
      };
    case "ERROR":
      return {
        startSearch: false,
        error: action.payload,
      };
    case "GET_BAND_NAME":
      return {
        ...state,
        bandName: action.payload,
      };
    case "START_SEARCH":
      return {
        ...state,
        startSearch: true,
      };

    default:
      return state;
  }
};

export default searchByBandReducer;
