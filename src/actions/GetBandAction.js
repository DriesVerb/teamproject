export const fetchBand = (inputBand) => (dispatch) => {
  fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${inputBand}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "FETCH_BAND",
        payload: data.artists[0],
      });
    });
};

export const getBandId = (inputId) => (dispatch) => {
  dispatch({
    type: "GET_BAND_ID",
    payload: inputId,
  });
};
