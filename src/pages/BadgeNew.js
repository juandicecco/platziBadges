import React from "react";

import "./styles/BadgeNew.css";
import Navbar from "../components/Navbar";
import header from "../images/badge-header.svg";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="Logo" />
        </div>

        <div className="container">
          <div className="row">
            <div className="col">
              <Badge
                firstName="Richard"
                lastName="Kaufman"
                twitter="sparragus"
                jobTitle="Frontend Engineer"
                avatarUrl="https://www.gravatar.com/avatar?d=identicon"
              ></Badge>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
