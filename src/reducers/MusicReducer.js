const initialState = {
  country: "france",
  music: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CHARTS":
      return {
        ...state,
        music: action.payload,
      };
    case "GET_COUNTRY":
      return {
        ...state,
        country: action.payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
