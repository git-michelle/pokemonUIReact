/** @jsx jsx */
import React, { Fragment } from "react";
import { css, jsx } from "@emotion/react";
import { NavLink, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const NavLinkStyle = css`
  list-style: none;
  padding: 0 7px;
  margin: 0 7px;

  :hover {
    background-color: lightpink;
  }
`;

const ActiveLink = css`
  text-decoration: underline;
  text-decoration-thickness: 3px;
  text-underline-offset: 5px;
`;

const InactiveLink = css`
  text-decoration: none;
`;

const NavListStyle = css`
  display: flex;
`;

// Routes
const NavBar = () => {
  const location = useLocation();
  const isAuth = useAuth();

  const isActive = (path) => {
    return path === location.pathname ? ActiveLink : InactiveLink;
  };

  console.log("navbar mounting");
  return (
    <nav>
      <ul css={NavListStyle}>
        <li css={NavLinkStyle}>
          <NavLink to="/" css={isActive("/")}>
            Home
          </NavLink>
        </li>
        {!isAuth && (
          <Fragment>
            <li css={NavLinkStyle}>
              <NavLink to="/signup" css={isActive("/signup")}>
                Signup
              </NavLink>
            </li>
            <li css={NavLinkStyle}>
              <NavLink to="/login" css={isActive("/login")}>
                Login
              </NavLink>
            </li>
          </Fragment>
        )}
        {isAuth && (
          <li css={NavLinkStyle}>
            <NavLink to="/logout" css={isActive("/logout")}>
              Logout
            </NavLink>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
