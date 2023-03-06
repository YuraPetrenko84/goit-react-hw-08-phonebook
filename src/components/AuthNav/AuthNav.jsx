import css from './AuthNav.module.css';
import { AuthItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <AuthItem to="/register">Register</AuthItem>
      <AuthItem to="/login">Log In</AuthItem>
    </div>
  );
};
