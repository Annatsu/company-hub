// React
import React from 'react';
import styled from '@emotion/styled';
import { useIntl } from 'react-intl';

// Prop Types
import { collaboratorPropType } from '../constants/prop-types';

// Components
import ProfilePicture from '../components/ProfilePicture';

const Header = styled.header`
  text-align: center;
  & > h1,
  & > p {
    margin-top: 20px;
  }

  & > * {
    margin-left: auto;
    margin-right: auto;
  }
`;

const CollaboratorDetails = ({ collaborator }) => {
  const { formatMessage, formatDate } = useIntl();

  return (
    <>
      <Header>
        <ProfilePicture lg src={collaborator.avatar} />
        <h1 className='title'>{formatMessage({ id: 'collaborator.greetings' })}</h1>
        <p className='subtitle'>
          {formatMessage(
            { id: 'collaborator.introduction' },
            {
              name: <strong>{collaborator.name}</strong>,
              role: <strong>{collaborator.role}</strong>,
              company: <strong>{collaborator.company}</strong>,
              date: <strong>{formatDate(collaborator.createdAt)}</strong>,
            },
          )}
        </p>
      </Header>
    </>
  );
};

CollaboratorDetails.propTypes = {
  collaborator: collaboratorPropType.isRequired,
};

export default CollaboratorDetails;
