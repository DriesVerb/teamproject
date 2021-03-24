const initialState = {
  startSearch: false,
  country: "Germany",
  isVisible: false,
  bandName: " ",
  music: [],
  error: null,
};

const countryReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_SEARCH":
      return {
        ...state,
        startSearch: true,
      };
    case "FETCH_CHARTS":
      return {
        ...state,
        error: null,
        music: action.payload,
      };

    case "ERROR": {
      return {
        ...state,
        error: action.payload,
      };
    }

    case "GET_COUNTRY":
      return {
        ...state,
        country: action.payload,
      };
    case "CHANGE_VIS": {
      return {
        ...state,
        isVisible: true,
      };
    }
    case "GET_BANDNAME": {
      return {
        ...state,
        bandName: action.payload,
      };
    }
    default:
      return state;
  }
};

export default countryReducer;
