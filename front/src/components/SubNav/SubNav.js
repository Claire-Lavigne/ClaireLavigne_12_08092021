import React, { Component } from "react";
import "./subNav.css";

class SubNav extends Component {
  render() {
    return (
      <nav className="sideNav">
        <div className="navIcon">
          <img src="/assets/relax.png" alt="" />
        </div>
        <div className="navIcon">
          <img src="/assets/swim.png" alt="" />
        </div>
        <div className="navIcon">
          <img src="/assets/bike.png" alt="" />
        </div>
        <div className="navIcon">
          <img src="/assets/muscu.png" alt="" />
        </div>
      </nav>
    );
  }
}

export default SubNav;
