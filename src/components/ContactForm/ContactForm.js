import React, { Component } from 'react';
import { connect } from 'react-redux';
import { contactsOperations } from '../../redux/contacts';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { ReactComponent as IconAdd } from '../../Icon/add.svg';
import styles from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { name } = this.state;
    const { contacts, onSubmit } = this.props;

    contacts.some(item => item.name === name)
      ? alert(`${name} is already in contacts`)
      : onSubmit({ ...this.state });

    this.reset();
  };

  reset = () => {
    this.setState({
      name: '',
      number: '',
    });
  };
  render() {
    const { name, number } = this.state;
    return (
      <form onSubmit={this.handleSubmit} className={styles.Form}>
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
            onChange={this.handleChange}
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
            onChange={this.handleChange}
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
}

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
