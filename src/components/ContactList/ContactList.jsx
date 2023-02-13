import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  fetchContacts,
  deleteContact,
} from 'redux/contactsSlice/contactsOperations';

import { ReactComponent as DeleteIcon } from '../icons/delete.svg';

import styles from './contact-list.module.css';

const ContactList = () => {
  const contactsRedux = useSelector(state => state.contacts.items);
  const filterRedux = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filterContacts = () => {
    const normalizedFilter = filterRedux.toLowerCase();
    return contactsRedux.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtredContacts = filterContacts();

  return (
    <ul className={styles.contactList}>
      {filtredContacts.map(({ id, name, phone }) => (
        <li key={id} className={styles.contactItem}>
          {name}: {phone}
          <button
            type="button"
            className={styles.contactBtn}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            <DeleteIcon width="20" />
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
