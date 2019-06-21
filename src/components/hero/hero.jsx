import React from 'react';
import PropTypes from 'prop-types';
import heroStyles from './hero.module.scss';

const Hero = ({ leadline: { shortIntro } }) => (
  <div className={heroStyles.container}>{shortIntro}</div>
);

Hero.propTypes = {
  leadline: PropTypes.shape({ shortIntro: PropTypes.string }).isRequired,
};

export default Hero;
