import { useSelector } from 'react-redux';

import ContactForm from '../ContactForm';
import Filter from '../Filter';
import ContactList from '../ContactList';

import styles from './app.module.css';

export default function App() {
  const contactsRedux = useSelector(state => state.contacts);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={styles.subTitle}>Contacts</h2>
      <div className={styles.contactListWrap}>
        {contactsRedux.length === 0 ? (
          <p>There is no contacts in your list.</p>
        ) : (
          <>
            <Filter />
            <ContactList />
          </>
        )}
      </div>
    </div>
  );
}
