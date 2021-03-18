const initialState = {
  artists: [],
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ ARTISTS":
      return {
        artists: action.payload,
      };
    default:
      return state;
  }
};

export default artistReducer;
