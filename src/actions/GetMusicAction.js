export const startSearch = () => (dispatch) => {
  dispatch({
    type: "START_SEARCH",
  });
};

export const changeCountry = (eventCountry) => (dispatch) => {
  dispatch({
    type: "GET_COUNTRY",
    payload: eventCountry,
  });
};

export const fetchMusicCharts = (countryUser) => (dispatch) => {
  fetch(
    `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${countryUser}&api_key=66194b39be6b9ff130d0440126ec6dd8&format=json`
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "FETCH_CHARTS",
        payload: data.topartists.artist,
      });
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
