import { Provider } from "react-redux";
import Artists from "./components/Artists";
import store from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Artists />
      </div>
    </Provider>
  );
}

export default App;
