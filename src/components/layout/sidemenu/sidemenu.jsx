import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'gatsby';
import sidemenuStyles from './sidemenu.module.scss';

const SideMenu = ({ isActive }) => (
  <nav
    className={clsx(sidemenuStyles.wrapper, {
      [`${sidemenuStyles.wrapperIsActive}`]: isActive,
    })}
    aria-hidden={!isActive}
    id="side-menu"
  >
    <ul className={sidemenuStyles.list}>
      <li className={sidemenuStyles.listItem}>
        <Link to="/" className={sidemenuStyles.link}>
          a menu item
        </Link>
      </li>
    </ul>
  </nav>
);

SideMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
};

export default SideMenu;
