const initialState = {
  music1: {},
  music2: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CHARTS":
      console.log(action.payload);
      return {
        music1: action.payload,
      };
    default:
      return state;
  }
};

export default musicReducer;
