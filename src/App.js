// react-router-dom
import { Route } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./store/Store";

// components home
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SearchCountry from "./components/SeachByCountry";
import SearchByBand from "./components/SearchByBand";
import AlbumName from "./components/AlbumName";
import Footer from "./components/Footer";

// components to routes

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/countryhits" component={SearchCountry} />
      <Route path="/topbands" component={SearchByBand} />
      <Route path="/album" component={AlbumName} />
      <Footer />
    </Provider>
  );
}

export default App;
