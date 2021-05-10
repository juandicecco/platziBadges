import React from "react";
import { Link } from "react-router-dom";

import astro from "../images/astronauts.svg";
import logo from "../images/platziconf-logo.svg";
import "./styles/HomePage.css";

function BadgeHome() {
  return (
    <div className="Home">
      <div className="col-text">
        <img src={logo} alt="Platzi conf logo" />
        <div>
          <h1>BADGE MANAGEMENT SYSTEM</h1>
          <Link className="btn btn-primary" to="/badges">
            Start
          </Link>
        </div>
      </div>
      <div className="col-img">
        <img src={astro} alt="Astronauta" />
      </div>
    </div>
  );
}

export default BadgeHome;
