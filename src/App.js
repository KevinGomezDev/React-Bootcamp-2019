import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./App.css";
import Home from "./views/Home";
import MovieForm from "./components/MovieForm";

function authUser() {
  return { isAuth: true };
}

function Routes() {
  const userAuth = authUser();
  return (
    <React.Fragment>
      <Route exact path="/" component={Home} />
      <Route exact path="/add" component={MovieForm} />
      <Route path="/movie/id" component={MovieForm} />
      <Route
        exact
        path="/addAuth"
        render={props => <MovieForm {...props} userAuth={userAuth} />}
      />
    </React.Fragment>
  );
}

function App() {
  return (
    <Router>
      <Link to="/?user=carlos&edad=22">Home</Link>
      <Link to="/">Form</Link>
      <Routes />
    </Router>
  );
}

export default App;
