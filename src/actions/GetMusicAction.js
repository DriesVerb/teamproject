export const fetchMusicCharts = () => (dispatch) => {
  fetch(
    "https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=66194b39be6b9ff130d0440126ec6dd8&format=json"
  )
    .then((res) => res.json())
    .then((data) => {
      dispatch({
        type: "FETCH_CHARTS",
        payload: data.topartists.artist,
      });
    });
};

// import axios from "axios";

// export const fetchMusicCharts = () => async (dispatch) => {
//   try {
//     const res = await axios.get(
//       "https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=66194b39be6b9ff130d0440126ec6dd8&format=json"
//     );
//     // console.log(res.data.topartists);
//     dispatch({
//       type: "FETCH_CHARTS",
//       payload: res.data.topartists.artist,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

// ("https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=spain&api_key=66194b39be6b9ff130d0440126ec6dd8&format=json");
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

// export const obtenerPokemonsAction = () => async (dispatch) => {
//   try {
//     const res = await axios.get(
//       "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
//     );
//     dispatch({
//       type: GET_POKE_SUCCESS,
//       payload: res.data.results,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };
