// APi link of Artists :
const apiKey = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=germany&api_key=66194b39be6b9ff130d0440126ec6dd8&format=json`;
//
export const fetchArtist = () => (dispatch) => {
  fetch(apiKey)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "FETCH_ ARTISTS",
        payload: data.topartists.artist,
      });
    });
};
