// react-router-dom
import { Route } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./store/Store";
<<<<<<< HEAD
import Charts from "./components/Charts";
import Album from "./components/Album";
=======

// components home
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SearchCountry from "./components/Charts";
import MainApp from "./carousel/components/MainApp";

// components to routes
>>>>>>> origin/master

function App() {
  return (
    <Provider store={store}>
<<<<<<< HEAD
      <div>
        <h1>Hello World,we are the Best Music Page </h1>
        <Charts />
        <Album/>
      </div>
=======
      <NavBar />

      <Route path="/" exact component={Home} />
      <Route path="/charts" component={SearchCountry} />

      <MainApp />
>>>>>>> origin/master
    </Provider>
  );
}

export default App;
