import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Page from "./Page";
import Search from "./Search";

import Navbar from "./Navbar";
import Login from "./Login";
function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            <Page />
          </Route>
          {/* <Route exact path="/home">
            <Home />
          </Route> */}
          {/* <Route exact path="/search">
            <Search />
          </Route> */}
          {/* <Route exact path="/login">
            <Login />
          </Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
