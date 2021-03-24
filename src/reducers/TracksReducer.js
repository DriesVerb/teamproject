const initialState = {
  albumId: "",
  topTracks: [],
};

const tracksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TRACKS":
      return {
        ...state,
        topTracks: action.payload,
      };
    default:
      return state;
  }
};

export default tracksReducer;
