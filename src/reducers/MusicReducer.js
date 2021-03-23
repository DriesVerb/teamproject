const initialState = {
  music: [],
  topTracks: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CHARTS":
      return {
        ...state,
        music: action.payload,
      };
    case "FETCH_TOP_TRACKS":
      return {
        ...state,
        topTracks: action.payload,
      };  
    default:
      return state;
  }
};

export default musicReducer;
