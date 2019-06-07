import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import headerStyles from './header.module.scss';

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `saddlebrown`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav role="navigation">
      <ul className={headerStyles.navigation}>
        <li className={headerStyles.navigationItem}>
          <Link to="/">Home</Link>
        </li>
        <li className={headerStyles.navigationItem}>
          <Link to="/profile/">Profile</Link>
        </li>
        <li className={headerStyles.navigationItem}>
          <Link to="/work/">Work</Link>
        </li>
      </ul>
    </nav>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
