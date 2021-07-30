import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from '../Navigation';
import UserMenu from '../UserMenu';
import AuthNav from '../AuthNav';
import authSelectors from '../../redux/auth/auth-selectors';
import styles from './AppBar.module.css';

export default function AppBar() {
  const isAuthenticated = useSelector(authSelectors.getIsAuthenticated);

  return (
    <header className={styles.Header}>
      <Navigation />
      {isAuthenticated ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
