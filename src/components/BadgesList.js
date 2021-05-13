import React from "react";
import { Link } from "react-router-dom";
import "./styles/BadgesList.css";
import tw_logo from "../images/twitter-logo.png";
import Gravatar from "./Gravatar";

function useSearchBadges(badges) {
  const [query, setQuery] = React.useState(""); //state y setState pero se puede renombrar

  const [filteredBadges, setFilteredBadges] = React.useState(badges);

  React.useMemo(() => {
    const result = badges.filter((badge) => {
      return `${badge.firstName} ${badge.lastName}`
        .toLowerCase()
        .includes(query.toLowerCase());
    });

    setFilteredBadges(result);
  }, [badges, query]);

  return { query, setQuery, filteredBadges };
}

export default function BadgesList(props) {
  const badges = props.badges;

  const { query, setQuery, filteredBadges } = useSearchBadges(badges);

  if (filteredBadges.length === 0) {
    return (
      <div>
        <div className="form-group">
          <label>Filter Badges</label>
          <input
            type="text"
            className="form-control"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </div>
        <h3>No badges were found</h3>
        <Link className="btn btn-primary" to="/badges/new">
          Create new badge
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="form-group">
        <label>Filter Badges</label>
        <input
          type="text"
          className="form-control"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
      <ul className="list-unstyled">
        {filteredBadges.map((badge) => {
          return (
            <li key={badge.id} className="Badge__section-name-list">
              <div className="container">
                <div className="row">
                  <div className="col-3">
                    <Gravatar
                      email={badge.email}
                      alt="Avatar"
                      className="Badge__avatar-list"
                    />
                  </div>
                  <Link
                    className="text-reset text-decoration-none"
                    to={`/badges/${badge.id}`}
                  >
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
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
