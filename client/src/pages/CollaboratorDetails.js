// React
import React from 'react';
import styled from '@emotion/styled';
import { useIntl } from 'react-intl';

// Prop Types
import { collaboratorPropType } from '../constants/prop-types';

// Components
import ProfilePicture from '../components/ProfilePicture';
import LeaveFeedback from '../components/LeaveFeedback';

const Header = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ProfileDetails = styled.div`
  margin-left: 20px;
  @media (max-width: 768px) {
    margin-left: 0px;
    margin-top: 20px;
    text-align: center;
  }
`;

const CollaboratorDetails = ({ collaborator }) => {
  const { formatMessage, formatDate } = useIntl();

  return (
    <>
      <Header>
        <ProfilePicture lg src={collaborator.avatar} />
        <ProfileDetails>
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
        </ProfileDetails>
      </Header>

      <div style={{ marginTop: 40 }}>
        <h2 className='subtitle'>{formatMessage({ id: 'collaborator.leaveFeedback' })}</h2>
        <LeaveFeedback collaboratorId={collaborator.id} />
      </div>
    </>
  );
};

CollaboratorDetails.propTypes = {
  collaborator: collaboratorPropType.isRequired,
};

export default CollaboratorDetails;
