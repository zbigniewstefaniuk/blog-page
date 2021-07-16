import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../../styles/navbar/navbar.styles.module.css';

import NavbarData from './navbarData';

const Navbar = () => {
  const renderNavbarItems = ({ title, url }: { title: string; url: string }): JSX.Element => {
    return (
      <li key={title}>
        <Link className={styles.navLink} to={url}>
          {title}
        </Link>
      </li>
    );
  };

  return (
    <nav className={styles.navbar}>
      <div>
        <ul className={styles.navMenu}>{Object.values(NavbarData).map(renderNavbarItems)}</ul>
      </div>
    </nav>
  );
};

export default Navbar;
