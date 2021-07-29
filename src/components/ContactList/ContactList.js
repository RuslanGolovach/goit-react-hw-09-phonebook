import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { contactsOperations } from '../../redux/contacts';
import {
  getLoading,
  filteredContacts,
} from '../../redux/contacts/contacts-selectors';
import ContactItem from './ContactItem';
import PreLoader from '../PreLoader';
import styles from './ContactList.module.css';

class ContactList extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { contacts, onDeleteClick, isLoadingContacts } = this.props;
    return (
      <div className={styles.Thumb}>
        {isLoadingContacts && <PreLoader />}

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
      </div>
    );
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  contacts: filteredContacts(state),
  isLoadingContacts: getLoading(state),
});

const mapDispatchToProps = dispatch => ({
  onDeleteClick: id => dispatch(contactsOperations.deleteContact(id)),
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
