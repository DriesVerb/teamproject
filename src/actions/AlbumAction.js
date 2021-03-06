export const fetchAlbum = (inputArtistId) => (dispatch) => {
  fetch(`https://theaudiodb.com/api/v1/json/1/album.php?i=${inputArtistId}`)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "FETCH_ALBUM",
        payload: data.album,
      });
    });
};

export const getAlbumId = (inputId) => (dispatch) => {
  dispatch({
    type: "GET_ALBUM_ID",
    payload: inputId,
  });
};

export const showTracks = () => (dispatch) => {
  dispatch({
    type: "SHOW_TRACKS",
  });
};
