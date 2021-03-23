export  const fetchAlbum = () => (dispatch) =>{
    fetch(`https://theaudiodb.com/api/v1/json/1/album.php?i=111493`)

    .then((res) => res.json())
    .then((data) => {
        dispatch({
            type: 'FETCH_ALBUM',
            payload: data.album
        });
    });
};