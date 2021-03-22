
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
