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
        <Route exact path="/user/:id" component={Dashboard} />
        <Redirect to="/user/:id" />
      </Switch>
    </Router>
  );
}

export default App;
