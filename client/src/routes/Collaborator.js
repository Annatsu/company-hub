// React
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Components
import IndeterminateProgressBar from '../components/IndeterminateProgressBar';

// Repositories
import CollaboratorRepository from '../repositories/Collaborator';

// Pages
import CollaboratorDetails from '../pages/CollaboratorDetails';

const CollaboratorRoute = () => {
  const { collaboratorId } = useParams();
  const [collaborator, setCollaborator] = useState(null);

  useEffect(() => {
    const fetchCollaboratorData = async () => {
      const collaboratorRepository = new CollaboratorRepository();
      const collaboratorData = await collaboratorRepository.getSingle(collaboratorId);
      setCollaborator(collaboratorData);
    };

    const timeoutHandle = window.setTimeout(fetchCollaboratorData, 1000);
    return () => window.clearTimeout(timeoutHandle);
  }, []);

  if (collaborator === null) {
    return <IndeterminateProgressBar />;
  }

  return <CollaboratorDetails collaborator={collaborator} />;
};

export default CollaboratorRoute;
