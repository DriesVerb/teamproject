
const initialState = {
    album : []
  };

const AlbumReducer = (state = initialState, action) => {
    
        switch (action.type) {
            case "GET-ALBUM":
              return {
                album: action.payload,
              };
            default:
              return state;
          }
}

export default AlbumReducer
