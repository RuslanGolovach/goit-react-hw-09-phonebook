import React from 'react';
import { ReactComponent as IconDelete } from '../../../Icon/minus.svg';
import styles from './ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteClick }) => {
  return (
    <li key={id} className={styles.ItemList}>
      <p className={styles.Text}>
        {name}: {number}
      </p>
      <button
        className={styles.DeleteBtn}
        type="button"
        onClick={() => onDeleteClick(id)}
      >
        <IconDelete
          width="20"
          height="20"
          fill="white"
          className={styles.IconDelete}
        />
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
