const initialState = {
    idAlbum: null,
    isVisible: false,
    album: []
};

const albumReducer = (state = initialState, action) => {
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