import React from 'react';
import PropTypes from 'prop-types';
import { socialMediaLinkPropType } from '../../prop-types';
import mainFooterStyles from './main-footer.module.scss';

const FooterLink = ({
  link: {
    serviceName,
    serviceLogo: {
      file: { url: fileUrl },
    },
    url,
  },
}) => (
  <div className={mainFooterStyles.linkInner}>
    <h4 className={mainFooterStyles.linkTitle}>{serviceName}</h4>
    <a className={mainFooterStyles.link} href={url}>
      <img src={fileUrl} alt={`${serviceName} logo`} />
    </a>
  </div>
);

FooterLink.propTypes = {
  link: socialMediaLinkPropType.isRequired,
};

const MainFooter = ({ links }) => (
  <div className={mainFooterStyles.container}>
    <div className={mainFooterStyles.linkContainer}>
      {links.map(link => (
        <FooterLink key={link.serviceName} link={link} />
      ))}
    </div>
  </div>
);

MainFooter.propTypes = {
  links: PropTypes.arrayOf(socialMediaLinkPropType).isRequired,
};

export default MainFooter;
