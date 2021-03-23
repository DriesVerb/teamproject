export const fetchMusicCharts = (countryUser) => (dispatch) => {
  fetch(
    `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${countryUser}&api_key=66194b39be6b9ff130d0440126ec6dd8&format=json`
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: 'FETCH_CHARTS',
        payload: data.topartists.artist,
      });
    });
};


export const fetchTopTracks = () => (dispatch) => {
  fetch(`https://theaudiodb.com/api/v1/json/1/track.php?m=2109877`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: 'FETCH_TRACKS',
        payload: data.track,
      });
    });
};






export const changeCountry = (eventCountry) => (dispatch) => {
  dispatch({
    type: "GET_COUNTRY",
    payload: eventCountry,
  });
};

export const changeVisible = () => (dispatch) => {
  dispatch({
    type: "CHANGE_VIS",
  });
};

export const changeBandName = (mapBand) => (dispatch) => {
  dispatch({
    type: "GET_BANDNAME",
    payload: mapBand,
  });
};
