import React, { useState } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import * as bs from "reactstrap";
import * as cpx from "./components";
import { PagesData } from "./Data";

import "./scss/index.scss";

// Data

export const App = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuClasses, setMenuClasses] = useState("");

  // Functions
  const handleMenuToggle = () => {
    //alert("hello");
    if (menuVisible) {
      setMenuVisible(false);
      setMenuClasses("");
    }
    if (!menuVisible) {
      setMenuVisible(true);
      setMenuClasses("show");
    }
  };

  // Snippets
  const navList = PagesData.filter((item) => item.hideNav !== true).map((item, index) => {
    return (
      <li className="nav-item" key={index}>
        <Link to={item.url} className="nav-link">
          {item.title}
        </Link>
      </li>
    );
  });

  const getRoutes = PagesData.map((page, index) => {
    return <Route path={page.url} exact component={page.content} />;
  });

  return (
    <>
      <Router>
        <div className="wrapper">
          <div className="navbar">
            <div className="container">
              <Link className="navbar-brand" to="/">
                CPX
              </Link>
              <bs.Button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarList"
                aria-controls="navbarList"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={handleMenuToggle}
              >
                <cpx.LineAwesome icon="las la-bars" />
              </bs.Button>
              <div className={`collapse navbar-collapse ${menuClasses}`} id="navbarList">
                <ul className="navbar-nav ml-auto">{navList}</ul>
              </div>
            </div>
          </div>

          <div className="content">
            <Switch>{getRoutes}</Switch>
          </div>
        </div>
      </Router>
    </>
  );
};
