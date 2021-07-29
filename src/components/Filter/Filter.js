import React from 'react';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';

const Filter = ({ value, changeFilterInput }) => (
  <label className={styles.LabelFind}>
    <span className={styles.SpanFind}>Find contacts by name</span>
    <input
      className={styles.InputFind}
      type="text"
      name="filter"
      value={value}
      onChange={changeFilterInput}
    />
  </label>
);

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  changeFilterInput: e =>
    dispatch(contactsActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
