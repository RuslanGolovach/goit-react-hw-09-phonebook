import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './Navigation.module.css';

export default function Navigation() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <nav>
      <NavLink
        to="/"
        exact
        className={styles.NavLink}
        activeClassName={styles.NavLink_Active}
      >
        Home
      </NavLink>

      {isAuthenticated && (
        <NavLink
          to="/contacts"
          exact
          className={styles.NavLink}
          activeClassName={styles.NavLink_Active}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
