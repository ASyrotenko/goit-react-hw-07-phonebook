import { useSelector, useDispatch } from 'react-redux';

import { deleteContactRedux } from 'redux/contactsSlice/contactsSlice';

import { ReactComponent as DeleteIcon } from '../icons/delete.svg';

import styles from './contact-list.module.css';

const ContactList = () => {
  const contactsRedux = useSelector(state => state.contacts);
  const filterRedux = useSelector(state => state.filter);

  const dispatch = useDispatch();

  const filterContacts = () => {
    const normalizedFilter = filterRedux.toLowerCase();
    return contactsRedux.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const filtredContacts = filterContacts();

  return (
    <ul className={styles.contactList}>
      {filtredContacts.map(({ id, name, number }) => (
        <li key={id} className={styles.contactItem}>
          {name}: {number}
          <button
            type="button"
            className={styles.contactBtn}
            onClick={() => {
              dispatch(deleteContactRedux(id));
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
