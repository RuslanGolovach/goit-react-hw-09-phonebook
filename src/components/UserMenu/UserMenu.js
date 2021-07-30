import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import authSelectors from '../../redux/auth/auth-selectors';
import authOperations from '../../redux/auth/auth-operations';
import userAvatar from './userAvatar.png';
import styles from './UserMenu.module.css';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUsername);

  const dispatch = useDispatch();

  const onLogout = useCallback(
    () => dispatch(authOperations.logOut()),
    [dispatch],
  );

  return (
    <div className={styles.Container}>
      <img src={userAvatar} alt="" width="32" className={styles.Avatar} />
      <span className={styles.Name}>Welcome, {name}!</span>
      <button className={styles.BtnLogout} type="button" onClick={onLogout}>
        Logout
      </button>
    </div>
  );
}
