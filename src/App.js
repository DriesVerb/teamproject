// react-router-dom
import { Route } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import Artists from "./components/Artists";
import store from "./store/Store";

// components home
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SearchCountry from "./components/Charts";
import MainApp from "./carousel/components/MainApp";

// components to routes

function App() {
  return (
    <Provider store={store}>
      <NavBar />

      <Route path="/" exact component={Home} />
      <Route path="/charts" component={SearchCountry} />

      <MainApp />
    </Provider>
  );
}

export default App;
