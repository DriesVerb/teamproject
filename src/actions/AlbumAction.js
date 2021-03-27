

export const FetchAlbums = () => dispatch=> {
    
        fetch(
            "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=coldplay&api_key=66194b39be6b9ff130d0440126ec6dd8&format=json"
          )
            .then((res) => res.json())
            .then((data) => {
             dispatch({
                type: "GET-ALBUM",
                payload: data.topalbums.album,
              });
            });
       }

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

