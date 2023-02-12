import { useDispatch } from 'react-redux';
import { addContactRedux } from 'redux/contactsSlice/contactsSlice';

import { useState } from 'react';

import styles from './contact-form.module.css';

export default function ContactForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addContactRedux({ name, number }));
    setName('');
    setNumber('');
  };

  return (
    <form className={styles.contactsForm} onSubmit={handleSubmit}>
      <div
        role="group"
        aria-labelledby="contact-details-head"
        className={styles.contactsWrap}
      >
        <label className={styles.contactsLabel}>
          Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
          />
        </label>
        <label className={styles.contactsLabel}>
          Number
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={styles.contactsBtn}>
          Add contact
        </button>
      </div>
    </form>
  );
}
