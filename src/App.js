// react-router-dom
import { Route } from 'react-router-dom';

// redux
import { Provider } from 'react-redux';
import store from './store/Store';

// components home
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SearchCountry from "./components/Charts";
import SearchByBand from "./components/SearchByBand";
import TopTracks from "./components/TopTracks";
import AlbumName from "./components/AlbumName";

// components to routes

function App() {
  return (
    <Provider store={store}>
      <NavBar />

      <Route path="/" exact component={Home} />
      <Route path="/charts" component={SearchCountry} />
      <Route path="/searchband" component={SearchByBand} />
      <Route path="/tracks" component={TopTracks} />
      <Route path="/album" component={AlbumName} />
    </Provider>
  );
}

export default App;
