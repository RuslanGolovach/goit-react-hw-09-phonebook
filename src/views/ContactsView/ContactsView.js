import ContactForm from '../../components/ContactForm';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import styles from './ContactsView.module.css';

const ContactsView = () => (
  <div className={styles.ContainerCont}>
    <h1 className={styles.Title}>Phonebook</h1>
    <ContactForm />
    <h2 className={styles.TitleContacts}>Contacts</h2>
    <Filter />
    <ContactList />
  </div>
);

export default ContactsView;
