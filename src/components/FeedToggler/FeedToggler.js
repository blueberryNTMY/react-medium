import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/currentUser";

const FeedToggler = ({ tagName }) => {
  const [currentUserState] = useContext(CurrentUserContext);
  return (
    <div className="feed-toggle">
      <ul className="nav nav-pills outline-active">
        {currentUserState.isLoggedIn && (
          <li className="nav-item">
            <NavLink
              to="/feed"
              exact
              className="nav-link"
              activeStyle={{ fontWeight: "bold" }}
            >
              Your feed
            </NavLink>
          </li>
        )}

        <li className="nav-item">
          <NavLink to="/" className="nav-link" exact>
            Global feed
          </NavLink>
        </li>
        {tagName && (
          <li className="nav-item">
            <NavLink
              exact
              to={`/tags/${tagName}`}
              className="nav-link"
              activeStyle={{ fontWeight: "bold" }}
            >
              #{tagName}
            </NavLink>
          </li>
        )}
      </ul>
    </div>
  );
};

export default FeedToggler;
