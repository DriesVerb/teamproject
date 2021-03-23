// react-router-dom
import { Route } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./store/Store";

import Charts from "./components/Charts";
import Album from "./components/Album";


// components home
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SearchCountry from "./components/Charts";
import MainApp from "./carousel/components/MainApp";
import YouTubeLink from "./components/YouTubeLink";


// components to routes


function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <YouTubeLink/>

      <Route path="/" exact component={Home} />
      <Route path="/charts" component={SearchCountry} />

      <MainApp />

    </Provider>
  );
}

export default App;
