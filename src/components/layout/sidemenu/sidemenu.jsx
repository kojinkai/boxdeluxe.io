import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Link } from 'gatsby';
import sidemenuStyles from './sidemenu.module.scss';

const SideMenu = ({ isActive, children }) => (
  <div
    className={clsx(sidemenuStyles.wrapper, {
      [`${sidemenuStyles.wrapperIsActive}`]: isActive,
    })}
  >
    <nav className={sidemenuStyles.nav} aria-hidden={!isActive} id="side-menu">
      <ul className={sidemenuStyles.list}>
        <li className={sidemenuStyles.listItem}>
          <Link to="/" className={sidemenuStyles.link}>
            a menu item
          </Link>
        </li>
      </ul>
    </nav>
    <div className={sidemenuStyles.view}>{children}</div>
  </div>
);

SideMenu.propTypes = {
  isActive: PropTypes.bool.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default SideMenu;
