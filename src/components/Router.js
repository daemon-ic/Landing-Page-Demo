import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./Landing";
import Login from "./Login";

export default function App() {
  return (
    <Router>
      <Route exact path="/">
        <Landing />
      </Route>

      <Route path="/login">
        <Login />
      </Route>
    </Router>
  );
}
