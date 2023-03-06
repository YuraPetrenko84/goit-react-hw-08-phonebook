import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/contacts-operations';

import css from './Contact.module.css';
import { MdDelete } from 'react-icons/md';

export const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div className={css.contactCard}>
      <p className={css.name}>
        {contact.name}: {contact.number}
      </p>
      <button className={css.deleteBtn} type="buttone" onClick={handleDelete}>
        <MdDelete />
      </button>
    </div>
  );
};
