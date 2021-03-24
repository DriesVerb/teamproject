export const fetchAlbum = (inputAlbumId) => (dispatch) => {
  fetch(`https://theaudiodb.com/api/v1/json/1/album.php?i=${inputAlbumId}`)
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
