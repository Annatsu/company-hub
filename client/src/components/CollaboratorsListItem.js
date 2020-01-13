// React
import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

// Prop Types
import { collaboratorPropType } from '../constants/prop-types';

// Components
import { Link } from 'react-router-dom';

const Container = styled.li`
  margin-bottom: 10px;
`;

const CollaboratorPicture = styled.img`
  border-radius: 50%;
  width: 64px;
  height: 64px;
`;
const CollaboratorName = styled.h1`
  margin-bottom: 0 !important;
  color: rgba(54, 54, 45, 1);
`;
const CollaboratorInfo = styled.small`
  color: rgba(54, 54, 45, 0.8);
`;

const CollaboratorsListItem = ({ collaborator, collaboratorUrl, ...rest }) => {
  return (
    <Container {...rest}>
      <Link to={collaboratorUrl}>
        <div className='box'>
          <article className='media'>
            <div className='media-left'>
              <figure className='image is-64x64'>
                <CollaboratorPicture src={collaborator.avatar} alt='Profile' />
              </figure>
            </div>
            <div className='media-content'>
              <div className='content'>
                <CollaboratorName>{collaborator.name}</CollaboratorName>
                <CollaboratorInfo>
                  {collaborator.role} @ {collaborator.company}
                </CollaboratorInfo>
              </div>
            </div>
          </article>
        </div>
      </Link>
    </Container>
  );
};

CollaboratorsListItem.propTypes = {
  collaborator: collaboratorPropType.isRequired,
  collaboratorUrl: PropTypes.string.isRequired,
};

export default CollaboratorsListItem;
