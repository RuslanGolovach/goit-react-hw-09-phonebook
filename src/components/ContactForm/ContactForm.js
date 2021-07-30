import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { ReactComponent as IconAdd } from '../../Icon/add.svg';
import styles from './ContactForm.module.css';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = useCallback(evt => {
    const { name, value } = evt.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        console.warn(`Тип поля - ${name} не обрабатывается`);
    }
  }, []);

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = useCallback(
    evt => {
      evt.preventDefault();

      contacts.some(item => item.name === name)
        ? alert(`${name} is already in contacts`)
        : dispatch(contactsOperations.addContact({ name, number }));

      reset();
    },
    [contacts, name, number, dispatch],
  );

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.Form}>
      <label className={styles.Label}>
        <span className={styles.Span}>Name</span>
        <input
          className={styles.Input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          value={name}
          onChange={handleChange}
        />
      </label>
      <label className={styles.Label}>
        <span className={styles.Span}>Number</span>
        <input
          className={styles.Input}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          value={number}
          onChange={handleChange}
        />
      </label>
      <button type="submit" className={styles.BtnContact}>
        <IconAdd
          width="20"
          height="20"
          fill="white"
          className={styles.IconAdd}
        />
        Add contact
      </button>
    </form>
  );
}
