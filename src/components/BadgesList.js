import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
import tw_logo from "../images/twitter-logo.png";

export default class BadgesList extends Component {
  render() {
    if (this.props.badges.length === 0) {
      return (
        <div>
          <h3>No badges were found</h3>
          <Link className="btn btn-primary" to="/badges/new">
            Create new badge
          </Link>
        </div>
      );
    }
    return (
      <ul className="list-unstyled">
        {this.props.badges.map((badge) => {
          return (
            <li key={badge.id} className="Badge__section-name-list">
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <img
                      src={badge.avatarUrl}
                      alt=""
                      className="Badge__avatar-list"
                    />
                  </div>
                  <div className="col">
                    <div className="row">
                      <strong>
                        {badge.firstName} {badge.lastName}
                      </strong>
                    </div>
                    <div className="row twitter__blue_font">
                      <img src={tw_logo} className="tw__logo" alt="" />
                      {badge.twitter}
                    </div>
                    <div className="row">{badge.jobTitle}</div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}
