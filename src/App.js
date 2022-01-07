import { Route, Switch } from "react-router-dom";

import Nav from "./components/Nav";

import Main from "./pages/Main";
import Currencies from "./pages/Currencies";
import Price from "./pages/Price";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route path="/currencies">
          <Currencies />
        </Route>
        <Route path="/price/:symbol" render={(props) => <Price {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
