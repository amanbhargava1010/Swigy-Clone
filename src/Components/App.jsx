import appStore from "../utils/appStore";
import Route from "./Route";
import { Provider } from "react-redux";

function App() {
  //Authentication
  return (
    <Provider store={appStore}>
      <Route></Route>
    </Provider>
  );
}

export default App;