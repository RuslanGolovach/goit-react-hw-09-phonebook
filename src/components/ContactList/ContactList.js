import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import {
  getLoading,
  filteredContacts,
} from '../../redux/contacts/contacts-selectors';
import ContactItem from './ContactItem';
import PreLoader from '../PreLoader';
import styles from './ContactList.module.css';

export default function ContactsList() {
  const contacts = useSelector(filteredContacts);
  const isLoadingContacts = useSelector(getLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
    return () => {};
  }, [dispatch]);

  const onDeleteClick = useCallback(
    id => {
      dispatch(contactsOperations.deleteContact(id));
    },
    [dispatch],
  );

  return (
    <div className={styles.Thumb}>
      {isLoadingContacts && <PreLoader />}

      {contacts.length > 0 ? (
        <ul className={styles.List}>
          {contacts.map(({ id, name, number }) => {
            return (
              <ContactItem
                key={id}
                name={name}
                number={number}
                onDeleteClick={onDeleteClick}
                id={id}
              />
            );
          })}
        </ul>
      ) : (
        <h2>Your contacts will be here</h2>
      )}
    </div>
  );
}
