// React
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useIntl } from 'react-intl';

// Node Modules
import moment from 'moment';

// Prop Types
import { feedbackPropType } from '../constants/prop-types';

// Repositories
import FeedbackRepository from '../repositories/Feedback';

// Constants
import { FEEDBACK_DELETE_THRESHOLD } from '../constants/feedbacks';

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
    color: rgb(${(p) => (p.red ? '241, 70, 104' : '0, 184, 156')});
  }
`;

const FeedbackListItem = ({ feedback, onLike, onDelete }) => {
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

  const deleteFeedback = useCallback(() => {
    const perform = async () => {
      const feedbackRepository = new FeedbackRepository();
      await feedbackRepository.delete(feedback);

      if (typeof onDelete === 'function') {
        onDelete();
      }
    };

    perform();
  }, [feedback, onDelete]);

  const canDelete = moment().diff(feedback.createdAt, 'minutes') < FEEDBACK_DELETE_THRESHOLD;

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
              {canDelete && (
                <div className='level-right'>
                  <div className='level-item'>
                    <ClickableIcon red className='icon' onClick={deleteFeedback}>
                      <i className='fas fa-trash' />
                    </ClickableIcon>
                  </div>
                </div>
              )}
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
  onDelete: PropTypes.func,
};

export default FeedbackListItem;
