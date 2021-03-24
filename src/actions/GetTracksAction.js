export const fetchTopTracks = (inputId) => (dispatch) => {
  fetch(`https://theaudiodb.com/api/v1/json/1/track.php?m=${inputId}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "FETCH_TRACKS",
        payload: data.track,
      });
    });
};
