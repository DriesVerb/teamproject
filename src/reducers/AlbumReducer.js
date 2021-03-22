const initialState = {
    album: []
};

const albumReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCHT_ALBUMS":
            return{
                album: action.payload
            };

            default:
                return state;
    }
}