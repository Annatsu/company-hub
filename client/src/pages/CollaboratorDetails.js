// React
import React, { useState, useEffect, useCallback } from 'react';
import styled from '@emotion/styled';
import { useIntl } from 'react-intl';

// Prop Types
import { collaboratorPropType } from '../constants/prop-types';

// Components
import ProfilePicture from '../components/ProfilePicture';
import LeaveFeedback from '../components/LeaveFeedback';
import FeedbackList from '../components/FeedbackList';
import Pagination from '../components/Pagination';

// Repositories
import FeedbackRepository from '../repositories/Feedback';

// Custom Hooks
import usePagination from '../hooks/usePagination';

// Constants
import { MAX_FEEDBACKS_PER_PAGE } from '../constants/feedbacks';

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

const ProfileSection = styled.div`
  margin-top: 40px;
`;

const CollaboratorDetails = ({ collaborator }) => {
  const { formatMessage, formatDate } = useIntl();
  const [feedbacks, setFeedbacks] = useState([]);

  const { page, displayableItems, pagesCount } = usePagination({ data: feedbacks, perPage: MAX_FEEDBACKS_PER_PAGE });

  const fetchFeedbacks = useCallback(async () => {
    const feedbackRepository = new FeedbackRepository();
    const feedbackList = await feedbackRepository.getAll(collaborator.id);
    setFeedbacks(feedbackList);
  }, [collaborator]);

  useEffect(() => {
    fetchFeedbacks();
  }, [fetchFeedbacks]);

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

      <ProfileSection>
        <h2 className='subtitle'>{formatMessage({ id: 'collaborator.leaveFeedback' })}</h2>
        <LeaveFeedback collaboratorId={collaborator.id} onSendFeedback={fetchFeedbacks} />
      </ProfileSection>

      <ProfileSection>
        <FeedbackList>
          {displayableItems.map((feedback) => (
            <FeedbackList.Item
              key={feedback.id}
              feedback={feedback}
              onLike={fetchFeedbacks}
              onDelete={fetchFeedbacks}
            />
          ))}
        </FeedbackList>

        <Pagination activePage={page} pagesCount={pagesCount} />
      </ProfileSection>
    </>
  );
};

CollaboratorDetails.propTypes = {
  collaborator: collaboratorPropType.isRequired,
};

export default CollaboratorDetails;
