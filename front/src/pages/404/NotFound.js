import React, { Component } from "react";
import { Link } from "react-router-dom";
import MainNav from "../../components/MainNav/MainNav";
import Footer from "../../components/Footer/Footer";
import "./notfound.css";

class NotFound extends Component {
  render() {
    return (
      <div className="wrapper">
        <MainNav />
        <div className="notFound">
          <h1 className="notFoundTitle">404</h1>
          <h2 className="notFoundSubtitle">
            Oups! La page que vous demandez n'existe pas.
          </h2>
          <Link className="notFoundLink" to={"/"}>
            Retourner sur la page d’accueil
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
}

export default NotFound;
