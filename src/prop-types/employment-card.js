import PropTypes from 'prop-types';

export default PropTypes.shape({
  technologyUsed: PropTypes.arrayOf(PropTypes.string),
  duties: PropTypes.string,
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
});
