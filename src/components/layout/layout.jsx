import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import SideMenu from './sidemenu';
import MainHeader from '../main-header';
import layoutStyles from './layout.module.scss';

const Layout = ({ children }) => {
  const [sidemenuIsActive, toggleSideMenu] = useState(false);

  const toggleMenu = () => toggleSideMenu(!sidemenuIsActive);
  return (
    <SideMenu isActive={sidemenuIsActive}>
      <div
        className={clsx(layoutStyles.pageWrapper, {
          [`${layoutStyles.pageWrappersidemenuIsActive}`]: sidemenuIsActive,
        })}
      >
        <MainHeader onToggle={toggleMenu} isActive={sidemenuIsActive} />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
        </div>
      </div>
    </SideMenu>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
