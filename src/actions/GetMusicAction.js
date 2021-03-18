// const apiKey = "66194b39be6b9ff130d0440126ec6dd8";
// const apiStart = "http://www.last.fm/api/auth/?api_key=";
// const apiChart =
//   "/2.0/?method=chart.gettoptags&api_key=YOUR_API_KEY&format=json";
// http://www.last.fm/api/auth/?api_key=66194b39be6b9ff130d0440126ec6dd8/2.0/?method=chart.gettoptags&api_key=YOUR_API_KEY&format=json

const api =
  "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=d162d1a6effcfa47a0af59fb02af462d&format=json ";
// "https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=d162d1a6effcfa47a0af59fb02af462d&artist=Cher&album=Believe&format=json";

export const fetchMusicCharts = () => (dispatch) => {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "FETCH_CHARTS",
        payload: data,
      });
    });
};

// fetch(`https://api.deezer.com/chart/0`)
// .then((res) => res.json())
// .then((data) =>
//   dispatch({
//     type: `FETCH_CHARTS`,
//     payload: data,
//   })
// );

// const res = axios.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=20");
//   dispatch({
//     type: `FETCH_CHARTS`,
//     payload: res.data,
//   });

// axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=20`).then((res) =>
//     dispatch({
//       type: `FETCH_CHARTS`,
//       payload: res.data,
//     })
//   );
