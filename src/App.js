import { Provider } from "react-redux";
import store from "./store/Store";
import Charts from "./components/Charts";
import TopTracks from "./components/TopTracks";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello World,we are the Best Music Page </h1>
        <TopTracks />
        <Charts />
      </div>
    </Provider>
  );
}

export default App;
 