const initialState = {
  albumId: null,
  albumCollection: [],
};

const albumReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALBUM":
      return {
        ...state,
        albumCollection: action.payload,
      };
    case "GET_ALBUM_ID":
      return {
        ...state,
        albumId: action.payload,
      };

    default:
      return state;
  }
};

export default albumReducer;
