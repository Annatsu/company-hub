// React
import React from 'react';

// Prop Types
import { collaboratorPropType } from '../constants/prop-types';

const CollaboratorDetails = ({ collaborator }) => <div />;

CollaboratorDetails.propTypes = {
  collaborator: collaboratorPropType.isRequired,
};

export default CollaboratorDetails;
