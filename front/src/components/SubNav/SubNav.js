import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./subNav.css";

class SubNav extends Component {
  render() {
    return (
      <nav className="sideNav">
        <NavLink
          exact={true}
          activeClassName="active"
          to={"/"}
          className="navIcon"
        >
          <img src="/assets/relax.png" alt="" />
        </NavLink>
        <NavLink
          exact={true}
          activeClassName="active"
          to={"/profile"}
          className="navIcon"
        >
          <img src="/assets/swim.png" alt="" />
        </NavLink>
        <NavLink
          exact={true}
          activeClassName="active"
          to={"/settings"}
          className="navIcon"
        >
          <img src="/assets/bike.png" alt="" />
        </NavLink>
        <NavLink
          exact={true}
          activeClassName="active"
          to={"/community"}
          className="navIcon"
        >
          <img src="/assets/muscu.png" alt="" />
        </NavLink>
      </nav>
    );
  }
}

export default SubNav;
