import { useDispatch, useSelector } from 'react-redux';
import css from './LogInForm.module.css';
import { logIn } from 'redux/auth/auth-operations';
import { Button } from 'components/Button/Button';
import { selectIsLoading, selectError } from 'redux/auth/auth-selectors';
import BarLoader from 'react-spinners/BarLoader';
import { useEffect } from 'react';
import { reLogIn } from 'redux/auth/auth-operations';

export const LogInForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(reLogIn());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.formCard}>
      <h2>Login</h2>
      <form
        className={css.form}
        onSubmit={handleSubmit}
        name="login_form"
        autoComplete="off"
      >
        <label className={css.label}>
          Email
          {/* <p className={css.description}>Enter E-mail address</p> */}
          <input
            className={css.input}
            type="email"
            name="email"
            required
            autoFocus
            placeholder=" "
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            title="Example: wick@mail.com"
          ></input>
        </label>
        <label className={css.label}>
          Password
          {/* <p className={css.description}>
            Must have at least 7 characters (1 character uppercase , 1 lowercase
            and 1 number)
          </p> */}
          <input
            className={css.input}
            type="password"
            name="password"
            required
            minLength="7"
            maxLength="12"
            placeholder=" "
            // pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$"
            // title="Example: Xn2isL0"
          ></input>
        </label>
        {error && (
          <p className={css.errorMessage}>
            Email or Password entered incorrectly
          </p>
        )}
        <Button>LogIn</Button>
      </form>
      {isLoading && !error && <BarLoader color="#5ac846" width="100%" />}
    </div>
  );
};
