import React from 'react';
import { useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';
import { Contact } from 'components/Contact/Contact';
import css from './ContactList.module.css';
import { selectFilter } from 'redux/filter/filter-selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  const filterData = useSelector(selectFilter);

  return (
    <div className={css.wrapper}>
      <h2 className={css.title}>Contact list</h2>
      <ul className={css.list}>
        {visibleContacts.map(contact => (
          <li key={contact.id} className={css.item}>
            <Contact contact={contact} />
          </li>
        ))}
        {visibleContacts.length === 0 && filterData === '' && (
          <p className={css.message}>
            your contact list is empty, add new contact
          </p>
        )}
        {visibleContacts.length === 0 && filterData !== '' && (
          <p className={css.message}>no mutches</p>
        )}
      </ul>
    </div>
  );
};

export default ContactList;
