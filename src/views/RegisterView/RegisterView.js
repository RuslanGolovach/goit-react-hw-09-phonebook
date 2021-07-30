import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './RegisterView.module.css';

export default function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback(evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

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
      dispatch(authOperations.register({ name, email, password }));

      setName('');
      setEmail('');
      setPassword('');
    },
    [dispatch, email, name, password],
  );

  return (
    <div>
      <h1 className={styles.TitleRegister}>SIGN UP</h1>

      <form
        className={styles.FormRegister}
        onSubmit={handleSubmit}
        style={styles.form}
        autoComplete="on"
      >
        <label style={styles.label}>
          <input
            className={styles.InputRegister}
            type="text"
            name="name"
            placeholder="Name"
            value={name}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          <input
            className={styles.InputRegister}
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={handleChange}
          />
        </label>

        <label style={styles.label}>
          <input
            className={styles.InputRegister}
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={handleChange}
          />
        </label>

        <button className={styles.BtnRegistet} type="submit">
          Sing Up
        </button>
      </form>
    </div>
  );
}
