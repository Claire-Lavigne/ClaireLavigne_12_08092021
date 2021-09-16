import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard";
import Profile from "./pages/Profile/Profile";
import Settings from "./pages/Settings/Settings";
import Community from "./pages/Community/Community";
import NotFound from "./pages/404/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/user/:id" component={Dashboard} />
        <Route path="/profile" component={Profile} />
        <Route path="/settings" component={Settings} />
        <Route path="/community" component={Community} />
        <Route path="/404" component={NotFound} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
}

export default App;
