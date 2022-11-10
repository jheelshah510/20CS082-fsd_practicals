import { Route, Switch } from "react-router-dom";
import "./App.css";
import MultiSelectTreeView from "./components/Test";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/test">
          <MultiSelectTreeView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
