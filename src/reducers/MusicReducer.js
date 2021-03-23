const initialState = {
  country: "france",
  isVisible: false,
  bandName: " ",
  music: [],
  topTracks: [],
};

const musicReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_CHARTS':
      return {
        ...state,
        music: action.payload,
      };

    case 'FETCH_TRACKS':
      return {
        ...state,
        topTracks: action.payload,
      };

    case 'GET_COUNTRY':
      return {
        ...state,
        country: action.payload,
      };
    case 'CHANGE_VIS': {
      return {
        ...state,
        isVisible: true,
      };
    }
    case 'GET_BANDNAME': {
      return {
        ...state,
        bandName: action.payload,
      };
    }
    default:
      return state;
  }
};

export default musicReducer;
