import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./mainNav.css";

const MainNav = () => {
  return (
    <nav className="mainNav">
      <Link className="navLink" to={`/user/`}>
        <img className="logo" src="/assets/logo.png" alt="Logo Kasa" />
      </Link>
      <NavLink
        exact={true}
        activeClassName="active"
        to={`/user/`}
        className="navLink"
      >
        Accueil
      </NavLink>
      <span className="navLink">Profil</span>
      <span className="navLink">Réglage</span>
      <span className="navLink">Communauté</span>
    </nav>
  );
};

export default MainNav;
