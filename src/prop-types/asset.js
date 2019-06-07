import PropTypes from 'prop-types';

export default PropTypes.shape({
  file: PropTypes.shape({
    url: PropTypes.string.isRequired,
  }),
});
