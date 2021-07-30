import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './LoginView.module.css';

export default function LoginView() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        console.warn(`Тип поля - ${name} не обрабатывается`);
    }
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    evt => {
      evt.preventDefault();
      dispatch(authOperations.logIn({ email, password }));
      setEmail('');
      setPassword('');
    },
    [dispatch, email, password],
  );

  return (
    <div>
      <h1 className={styles.TitleLogin}>LOG IN</h1>

      <form
        onSubmit={handleSubmit}
        style={styles.form}
        autoComplete="on"
        className={styles.FormLogin}
      >
        <label className={styles.label}>
          <input
            className={styles.InputLogin}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label className={styles.label}>
          <input
            className={styles.InputLogin}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={styles.BtnLogin} type="submit">
          Log In
        </button>
      </form>
    </div>
  );
}
