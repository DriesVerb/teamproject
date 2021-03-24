// react-router-dom
<<<<<<< HEAD
import { Route, Switch } from "react-router-dom";
=======
import { Route } from 'react-router-dom';
>>>>>>> master

// redux
import { Provider } from 'react-redux';
import store from './store/Store';

// components home
<<<<<<< HEAD
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SearchCountry from "./components/Charts";
import NotFound from './components/NotFound';
=======
import Home from './components/Home';
import NavBar from './components/NavBar';
import SearchCountry from './components/Charts';
>>>>>>> master
import TopTracks from './components/TopTracks';
import MainApp from './carousel/components/MainApp';
import AlbumName from './components/AlbumName';


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

<<<<<<< HEAD
      </Switch>
=======
      <Route path='/' exact component={Home} />
      <Route path='/charts' component={SearchCountry} />
      <Route path='/tracks' component={TopTracks} />
      <Route path='/album' component={AlbumName} />
>>>>>>> master

      <MainApp />
    </Provider>
  );
}

export default App;
