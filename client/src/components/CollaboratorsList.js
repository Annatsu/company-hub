// React
import styled from '@emotion/styled';

// Components
import CollaboratorsListItem from './CollaboratorsListItem';

const CollaboratorsList = styled.ul`
  list-style: none;
`;

CollaboratorsList.Item = CollaboratorsListItem;
export default CollaboratorsList;
