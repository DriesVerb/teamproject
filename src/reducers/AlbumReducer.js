const initialState = {
  albumId: "",
  albumCollection: [],
  tracksVisible: false,
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALBUM":
      return {
        // ...state,
        albumCollection: action.payload,
      };
    case "GET_ALBUM_ID":
      return {
        ...state,
        albumId: action.payload,
      };
    case "SHOW_TRACKS":
      return {
        ...state,
        tracksVisible: true,
      };

    default:
      return state;
  }
};

export default albumReducer;
