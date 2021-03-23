
const initialState = {
  linksOfVideos: [],
};

const youTubeLinkReducer=(state =initialState, action) => {
 switch(action.type){
   case "GET-VIDEO":
     return {
       ...state,
       linksOfVideos :action.payload,
     };
     default: 
      return {
        state
      }
        

 }
}

export default youTubeLinkReducer
