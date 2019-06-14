import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import hamburgerStyles from './hamburger.module.scss';

const Hamburger = ({ onClick, isActive }) => (
  <button
    className={clsx(hamburgerStyles.hamburger, {
      [`${hamburgerStyles.isActive}`]: isActive,
    })}
    type="button"
    onClick={onClick}
    arialabel={isActive ? 'Close the navigation' : 'Open the navigation'}
    aria-label="Menu toggle"
    aria-controls="side-menu"
  >
    <div className={hamburgerStyles.box}>
      <div className={hamburgerStyles.inner} />
    </div>
  </button>
);

Hamburger.propTypes = {
  onClick: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default Hamburger;
