// React
import React, { useState, useEffect, useMemo } from 'react';
import { useIntl } from 'react-intl';

// Node Modules
import { remove as removeDiacritics } from 'diacritics';

// Components
import CollaboratorsList from '../components/CollaboratorsList';

// Repositories
import CollaboratorRepository from '../repositories/Collaborator';

// Constants
import { MAX_COLLABORATORS_PER_PAGE } from '../constants/collaborators';

const CollaboratorsPage = () => {
  const { formatMessage } = useIntl();
  const [collaborators, setCollaborators] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  const filteredCollaborators = useMemo(() => {
    const collaboratorsToFilter = searchQuery.length !== 0 ? filterCollaboratorsBySearch(collaborators) : collaborators;
    const sliceStart = (page - 1) * MAX_COLLABORATORS_PER_PAGE;
    const sliceEnd = page * MAX_COLLABORATORS_PER_PAGE;
    return collaboratorsToFilter.slice(sliceStart, sliceEnd);
  }, [collaborators, page, searchQuery]);

  useEffect(() => {
    const fetchCollaborators = async () => {
      const collaboratorRepository = new CollaboratorRepository();
      const collaboratorsList = await collaboratorRepository.getAll();
      setCollaborators(collaboratorsList);
    };

    fetchCollaborators();
  }, []);

  return (
    <section className='section'>
      <div className='container'>
        <div className='columns'>
          <div className='column'>
            <h1 className='title'>{formatMessage({ id: 'collaborators.header.title' })}</h1>
            <h2 className='subtitle'>
              {formatMessage({ id: 'collaborators.header.subtitle' }, { count: collaborators.length })}
            </h2>
          </div>
          <div className='column'></div>
        </div>

        <CollaboratorsList>
          {filteredCollaborators.map((collaborator) => (
            <CollaboratorsList.Item
              key={collaborator.id}
              collaborator={collaborator}
              collaboratorUrl={`/collaborator/${collaborator.id}`}
            />
          ))}
        </CollaboratorsList>
      </div>
    </section>
  );
};

const filterCollaboratorsBySearch = (searchQuery, collaborators) => {
  const normalizedSearchQuery = removeDiacritics(searchQuery);
  return collaborators.filter(({ name }) => name.indexOf(normalizedSearchQuery) !== -1);
};

export default CollaboratorsPage;
