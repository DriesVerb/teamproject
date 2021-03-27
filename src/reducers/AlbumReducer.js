/* 

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
} */

/* export default AlbumReducer */

const initialState2 = {
    idAlbum: null,
    isVisible: false,
    album: []
};

const albumReducer = (state = initialState2, action) => {
    switch (action.type) {
        case "FETCH_ALBUM":
            return{
                ...state,
                album: action.payload
            }
    
        default:
            return state;
    }
};

export default albumReducer;

