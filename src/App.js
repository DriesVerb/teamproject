// react-router-dom
import { Route } from "react-router-dom";

// redux
import { Provider } from "react-redux";
import store from "./store/Store";

// components home
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Charts from "./components/Charts";

// components to routes

function App() {
  return (
    <Provider store={store}>
      <NavBar />
      <Route path="/" exact component={Home} />
      <Route path="/charts" component={Charts} />
    </Provider>
  );
}

export default App;
