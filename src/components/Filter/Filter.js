import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import styles from './Filter.module.css';

export default function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();
  const changeFilterInput = useCallback(
    e => dispatch(contactsActions.changeFilter(e.target.value)),
    [dispatch],
  );

  return (
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
}
