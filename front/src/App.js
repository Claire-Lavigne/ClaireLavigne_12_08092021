import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/user/:id" component={Dashboard} />
        <Redirect to="/user/12" />
      </Switch>
    </Router>
  );
}

export default App;
