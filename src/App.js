import "./App.css";
import Counter from "./Counter";
import appStore from "./appStore";
import { Provider } from "react-redux";
function App() {
  return (
    <Provider store={appStore}>
      <div className="App">
        <Counter />
      </div>
    </Provider>
  );
}

export default App;
