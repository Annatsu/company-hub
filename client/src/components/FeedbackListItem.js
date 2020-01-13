// React
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useIntl } from 'react-intl';

// Prop Types
import { feedbackPropType } from '../constants/prop-types';

// Repositories
import FeedbackRepository from '../repositories/Feedback';

const Container = styled.li`
  margin-bottom: 10px;
`;

const FeedbackMessage = styled.p`
  font-size: 1.2em;
`;

const ClickableIcon = styled.span`
  cursor: pointer;
  transition: color 0.3s linear;
  &:hover {
    color: rgba(0, 184, 156, 1);
  }
`;

const FeedbackListItem = ({ feedback, onLike }) => {
  const { formatMessage, formatDate, formatTime } = useIntl();

  const likeFeedback = useCallback(() => {
    const perform = async () => {
      const feedbackRepository = new FeedbackRepository();
      await feedbackRepository.like(feedback, feedback.like + 1);

      if (typeof onLike === 'function') {
        onLike();
      }
    };

    perform();
  }, [feedback, onLike]);

  return (
    <Container>
      <div className='box'>
        <article className='media'>
          <div className='media-content'>
            <div className='content'>
              <FeedbackMessage>{feedback.message}</FeedbackMessage>
            </div>
            <nav className='level is-mobile'>
              <div className='level-left'>
                <div className='level-item'>
                  <ClickableIcon className='icon' onClick={likeFeedback}>
                    <i className='fas fa-thumbs-up' />
                  </ClickableIcon>
                  <small>{formatMessage({ id: 'collaborator.likes' }, { count: feedback.like })}</small>
                </div>
                <div className='level-item'>
                  <span className='icon'>
                    <i className='fas fa-clock' />
                  </span>
                  <small>
                    {formatDate(feedback.createdAt)} - {formatTime(feedback.createdAt)}
                  </small>
                </div>
              </div>
            </nav>
          </div>
        </article>
      </div>
    </Container>
  );
};

FeedbackListItem.propTypes = {
  feedback: feedbackPropType.isRequired,
  onLike: PropTypes.func,
};

export default FeedbackListItem;
