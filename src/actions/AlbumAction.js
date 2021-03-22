const api = "https://theaudiodb.com/api/v1/json/1/album.php?i=111493";

export const fetchAlbum = () => (dispatch) => {
    fetch(api)
        .then((res) => res.json())
        .then((data) =>{

            dispatch({
                type: "FETCH_ALBUMS",
                payload: data,
            });
        });
};