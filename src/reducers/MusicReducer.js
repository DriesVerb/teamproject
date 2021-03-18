const initialState = {
  music: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CHARTS":
      return {
        music: action.payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
