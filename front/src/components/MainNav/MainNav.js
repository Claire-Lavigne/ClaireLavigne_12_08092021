import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./mainNav.css";

const MainNav = (props) => {
  return (
    <nav className="mainNav">
      <Link className="navLink" to={`/user/${props.userID}`}>
        <img className="logo" src="/assets/logo.png" alt="Logo Kasa" />
      </Link>
      <NavLink
        exact={true}
        activeClassName="active"
        to={`/user/${props.userID}`}
        className="navLink"
      >
        Accueil
      </NavLink>
      <NavLink
        exact={true}
        activeClassName="active"
        to={"/profile"}
        className="navLink"
      >
        Profil
      </NavLink>
      <NavLink
        exact={true}
        activeClassName="active"
        to={"/settings"}
        className="navLink"
      >
        Réglage
      </NavLink>
      <NavLink
        exact={true}
        activeClassName="active"
        to={"/community"}
        className="navLink"
      >
        Communauté
      </NavLink>
    </nav>
  );
};

export default MainNav;
