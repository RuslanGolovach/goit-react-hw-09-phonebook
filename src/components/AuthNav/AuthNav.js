import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => (
  <div>
    <NavLink
      to="/register"
      exact
      className={styles.NavLinkAuth}
      activeClassName={styles.NavLinkAuth_Active}
    >
      Sign Up
    </NavLink>
    <NavLink
      to="/login"
      exact
      className={styles.NavLinkAuth}
      activeClassName={styles.NavLinkAuth_Active}
    >
      Log In
    </NavLink>
  </div>
);

export default AuthNav;
