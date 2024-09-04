import {Provider} from "react-redux"
import Body from "./components/Body.js";
import appStore from "./utils/appStore.js";
import './App.css';

function App() {
  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  );
}

export default App;
