import React, { Component } from "react";
import SubNav from "../SubNav/SubNav";
import Footer from "../Footer/Footer";
import "./sideBar.css";

class SideBar extends Component {
  render() {
    return (
      <div className="sideBar">
        <SubNav />
        <Footer />
      </div>
    );
  }
}

export default SideBar;
