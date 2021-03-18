import { Provider } from "react-redux";
import Artists from "./components/Artists";
import store from "./store/Store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello World,we are the Best Music Page </h1>
        <Artists />
      </div>
    </Provider>
  );
}

export default App;
