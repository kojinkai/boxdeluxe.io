import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Hamburger from './hamburger';
import mainHeaderStyles from './main-header.module.scss';

const MainHeader = ({ onToggle, isActive }) => (
  <div className={mainHeaderStyles.container}>
    <Link to="/">add logo here</Link>

    <div className={mainHeaderStyles.smallViewportCallToActionGroup}>
      <Hamburger onClick={onToggle} isActive={isActive} />
    </div>
    {
      // we map over the entire list, including the mainCta,
      // despite having filtered it out above so that the link order in the CMS is respected
    }
    <nav className={mainHeaderStyles.navigation} role="navigation">
      <Link className={mainHeaderStyles.internalLink} to="/">
        Home
      </Link>
      <Link className={mainHeaderStyles.internalLink} to="/profile/">
        Profile
      </Link>
      <Link className={mainHeaderStyles.internalLink} to="/work/">
        Work
      </Link>
    </nav>
  </div>
);

MainHeader.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default MainHeader;
