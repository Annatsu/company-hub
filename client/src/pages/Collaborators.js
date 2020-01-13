// React
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useIntl } from 'react-intl';

// Node Modules
import { remove as removeDiacritics } from 'diacritics';

// Components
import ApplicationFrame from '../components/ApplicationFrame';
import CollaboratorsList from '../components/CollaboratorsList';
import SearchBar from '../components/SearchBar';
import Pagination from '../components/Pagination';

// Repositories
import CollaboratorRepository from '../repositories/Collaborator';

// Custom Hooks
import usePagination from '../hooks/usePagination';
import useTitle from '../hooks/useTitle';

// Constants
import {
  MAX_COLLABORATORS_PER_PAGE,
  LOCAL_STORAGE_CACHE_KEY as COLLABORATORS_CACHE_KEY,
} from '../constants/collaborators';

const CollaboratorsPage = () => {
  const { formatMessage } = useIntl();
  const [collaborators, setCollaborators] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  useTitle(formatMessage({ id: 'routes.collaborators.title' }));

  const searchFilteredCollaborators = useMemo(
    () => (searchQuery.length !== 0 ? filterCollaboratorsBySearch(searchQuery, collaborators) : collaborators),
    [collaborators, searchQuery],
  );

  const { page, displayableItems, pagesCount } = usePagination({
    data: searchFilteredCollaborators,
    perPage: MAX_COLLABORATORS_PER_PAGE,
  });

  useEffect(() => {
    const fetchCollaborators = async () => {
      const collaboratorRepository = new CollaboratorRepository();
      const collaboratorsList = await collaboratorRepository.getAll();
      window.localStorage.setItem(COLLABORATORS_CACHE_KEY, JSON.stringify(collaboratorsList));
      setCollaborators(collaboratorsList);
    };

    const storedCollaborators = JSON.parse(window.localStorage.getItem(COLLABORATORS_CACHE_KEY));
    if (storedCollaborators) {
      setCollaborators(storedCollaborators);
    } else {
      fetchCollaborators();
    }
  }, []);

  const onCollaboratorSearch = useCallback((searchValue) => setSearchQuery(searchValue), []);

  return (
    <ApplicationFrame>
      <div className='columns'>
        <div className='column'>
          <h1 className='title'>{formatMessage({ id: 'collaborators.header.title' })}</h1>
          <h2 className='subtitle'>
            {formatMessage({ id: 'collaborators.header.subtitle' }, { count: collaborators.length })}
          </h2>
        </div>
        <div className='column'>
          <SearchBar onChange={onCollaboratorSearch} />
        </div>
      </div>

      <CollaboratorsList>
        {displayableItems.map((collaborator) => (
          <CollaboratorsList.Item
            key={collaborator.id}
            collaborator={collaborator}
            collaboratorUrl={`/collaborator/${collaborator.id}`}
          />
        ))}
      </CollaboratorsList>

      <Pagination activePage={page} pagesCount={pagesCount} />
    </ApplicationFrame>
  );
};

const filterCollaboratorsBySearch = (searchQuery, collaborators) => {
  const normalizedSearchQuery = removeDiacritics(searchQuery).toLowerCase();
  return collaborators.filter(
    ({ name, role, company }) =>
      name.toLowerCase().indexOf(normalizedSearchQuery) !== -1 ||
      role.toLowerCase().indexOf(normalizedSearchQuery) !== -1 ||
      company.toLowerCase().indexOf(normalizedSearchQuery) !== -1,
  );
};

export default CollaboratorsPage;
