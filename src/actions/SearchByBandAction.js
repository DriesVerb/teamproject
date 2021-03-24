export const startSearch = () => (dispatch) => {
  dispatch({
    type: "START_SEARCH",
  });
};

export const getBandName = (inputBand) => (dispatch) => {
  dispatch({
    type: "GET_BAND_NAME",
    payload: inputBand,
  });
};

export const fetchBand = (queryBand) => (dispatch) => {
  fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${queryBand}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      dispatch({
        type: "FETCH_BAND",
        payload: data.artists[0],
      });
    })
    .catch((error) => {
      dispatch({
        type: "ERROR",
        payload: queryBand,
      });
    });
};
