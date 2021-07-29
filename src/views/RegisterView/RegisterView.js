import React, { Component } from 'react';
import { connect } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import styles from './RegisterView.module.css';

class RegisterView extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onRegister(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h1 className={styles.TitleRegister}>SIGN UP</h1>

        <form
          className={styles.FormRegister}
          onSubmit={this.handleSubmit}
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
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            <input
              className={styles.InputRegister}
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            <input
              className={styles.InputRegister}
              type="password"
              name="password"
              placeholder="Password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.BtnRegistet} type="submit">
            Sing Up
          </button>
        </form>
      </div>
    );
  }
}

/*
 * 1-й вариант
 */
// const mapDispatchToProps = {
//   onRegister: authOperations.register,
// };

/*
 * 2-й вариант
 */

const mapDispatchToProps = dispatch => ({
  onRegister: data => dispatch(authOperations.register(data)),
});

export default connect(null, mapDispatchToProps)(RegisterView);
