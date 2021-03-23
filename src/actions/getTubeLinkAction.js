
export const FetchVideoLink = () => dispatch=> {
    
    fetch(
        `https://theaudiodb.com/api/v1/json/1/mvid.php?i=111479`
      )
        .then((res) => res.json())
        .then((data) => {
         dispatch({
            type: "GET-VIDEO",
            payload: data.mvids,
          });
        });
   }

