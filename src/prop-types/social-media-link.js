import PropTypes from 'prop-types';
import assetPropType from './asset';

export default PropTypes.shape({
  serviceName: PropTypes.string.isRequired,
  serviceLogo: assetPropType.isRequired,
  url: PropTypes.string.isRequired,
});
