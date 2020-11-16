import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Home from "../Routes/kb/Home";
import Event from "../Routes/kb/Event";

export default () => (
  <Router>
    <>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/kb/event" component={Event} /> */}
        <Redirect from="*" to="/" />
      </Switch>
      <Footer />
    </>
  </Router>
);
