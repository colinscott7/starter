import React, { useMemo } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import * as bs from "reactstrap";
import * as cpx from "../../components";
import { useHistory } from "react-router-dom";
import { PagesData } from "../../Data";

export const Navbar = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const [menuClasses, setMenuClasses] = React.useState("");
  const history = useHistory();

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
    const navigateToPath = (url: string) => (evt: any) => {
      evt.preventDefault();
      evt.stopPropagation();
      history.push(url);
      setMenuVisible(false);
      setMenuClasses("");
    };
    return (
      <li className="nav-item" key={index}>
        <bs.Button onClick={navigateToPath(item.url)} className="nav-link">
          {item.title}
        </bs.Button>
      </li>
    );
  });

  return (
    <bs.Navbar color="dark">
      <bs.Container>
        <Link className="navbar-brand" to="/">
          <img alt="" className="navbar-img" src="/logo192.png" />
          <span className="navbar-title">Starter App</span>
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
          <bs.Container>
            <ul className="navbar-nav ml-auto">{navList}</ul>
          </bs.Container>
        </div>
      </bs.Container>
    </bs.Navbar>
  );
};
