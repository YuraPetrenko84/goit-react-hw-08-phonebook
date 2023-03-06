import ContactList from 'components/ContactList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/contacts-operations';
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import {
  selectError,
  selectIsLoading,
} from 'redux/contacts/contacts-selectors';
import BarLoader from 'react-spinners/BarLoader';
import css from './Contacts.module.css';

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <section className={css.contacts}>
        <ContactForm />
        <Filter />
      </section>
      <section>
        {isLoading && !error ? (
          <BarLoader color="#5ac846" width="100%" />
        ) : (
          <ContactList />
        )}
      </section>
    </>
  );
};

export default Contacts;
