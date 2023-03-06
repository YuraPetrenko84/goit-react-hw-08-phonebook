// React/redux
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import { selectContacts } from 'redux/contacts/contacts-selectors';
// Components
import css from './ContactForm.module.css';
import { Button } from 'components/Button/Button';
// Validation
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function ContactForm() {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  // початковий стан для formik
  const formikInitialValue = {
    name: '',
    number: '',
  };

  // Валідація
  const validationSchema = Yup.object().shape({
    name: Yup.string().trim().required('Example: Alain Delon'),
    number: Yup.string().trim().required('Example: 555-55-55'),
  });

  const checkIsInContacts = newName =>
    contacts.some(({ name }) => name.toLowerCase() === newName.toLowerCase());

  // Метод виконується при сабміті форми
  const onSubmit = (values, actions) => {
    console.log(values);
    console.log(actions);
    const name = values.name;

    const isInContacts = checkIsInContacts(name);

    // не додаємо контакт
    if (isInContacts) {
      alert(`"${name}" is already in contacts.`);
      return;
    }

    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <div className={css.formCard}>
      <h2>New Contact</h2>
      <Formik
        initialValues={formikInitialValue}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ handleSubmit }) => (
          <Form
            className={css.form}
            onSubmit={handleSubmit}
            name="contact_form"
            autoComplete="off"
          >
            <label className={css.label}>
              Name
              <Field
                className={css.input}
                type="text"
                name="name"
                placeholder=" "
                autoFocus
                required
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              />
              <ErrorMessage
                name="name"
                component="p"
                className={css.inputError}
              />
            </label>

            <label className={css.label}>
              Phone
              <Field
                className={css.input}
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                placeholder=" "
                required
              />
              <ErrorMessage
                name="number"
                component="p"
                className={css.inputError}
              />
            </label>
            <Button>Add</Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
