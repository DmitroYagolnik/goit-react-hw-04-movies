import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.scss';

const Header = () => {
  return (
    <header>
      <nav className={style.nav}>
        <ul className={style.navList}>
          <li className={style.navItem}>
            <NavLink exact to="/" className={style.navLink}>
              Home
            </NavLink>
          </li>
          <li className={style.navItem}>
            <NavLink to="/movies" className={style.navLink}>
              Mouvies
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
