import { Provider } from "react-redux";
import store from "./store/Store";
import Charts from "./components/Charts";
import Album from "./components/Album";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>Hello World,we are the Best Music Page </h1>
        <Charts />
        <Album/>
      </div>
    </Provider>
  );
}

export default App;
