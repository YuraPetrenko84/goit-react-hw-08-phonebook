import css from './Navigation.module.css';
import { NavItem } from './Navigation.styled';
import { selectIsLoggedIn } from 'redux/auth/auth-selectors';
import { useSelector } from 'react-redux';

export const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <div className={css.wrapper}>
      <NavItem to="/" className={css.menuItem}>
        Home
      </NavItem>
      {isLoggedIn && (
        <NavItem to="/contacts" className={css.menuItem}>
          Contacts
        </NavItem>
      )}
    </div>
  );
};
