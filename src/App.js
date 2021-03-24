// react-router-dom
import { Route, Switch } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./store/Store";

// components home
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SearchCountry from "./components/Charts";
import NotFound from './components/NotFound';
import TopTracks from './components/TopTracks';
import MainApp from "./carousel/components/MainApp";


// components to routes

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/charts' component={SearchCountry} />
        <Route path='/tracks' component={TopTracks} />
        <Route component={NotFound} />

      </Switch>

      <MainApp />
    </Provider>
  );
}

export default App;
 