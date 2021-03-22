const initialState = {
  bandId: null,
  isVisible: false,
  band: [],
};

const bandReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BAND":
      return {
        ...state,
        band: action.payload,
      };
    default:
      return state;
  }
};

export default bandReducer;
