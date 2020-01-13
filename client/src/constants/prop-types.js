// React
import PropTypes from 'prop-types';

export const collaboratorPropType = PropTypes.shape({
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
});
