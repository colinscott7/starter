import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import * as bs from "reactstrap";
import * as cpx from "./components";
import { PagesData } from "./Data";
import "./scss/index.scss";

// Data

export const App = () => {
  const getRoutes = PagesData.map((page, index) => {
    return <Route path={page.url} exact component={page.content} />;
  });

  return (
    <>
      <Router>
        <div className="wrapper">
          <cpx.Navbar />
          <div className="content">
            <Switch>{getRoutes}</Switch>
          </div>
        </div>
      </Router>
    </>
  );
};
