// React
import React, { useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import styled from '@emotion/styled';

// Repositories
import FeedbackRepository from '../repositories/Feedback';

const SendFeedbackButton = styled.button`
  position: absolute;
  color: white;
  font-size: 1em;
  background-color: rgba(0, 184, 156, 1);
  border-radius: 50%;
  width: 50px;
  height: 50px;
  border: none;
  bottom: 10px;
  right: 10px;
  transition: background 0.3s linear;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 184, 156, 0.8);
  }
`;

const FeedbackContainer = styled.div`
  position: relative;
`;

const LeaveFeedback = ({ collaboratorId, onSendFeedback }) => {
  const { formatMessage } = useIntl();
  const textAreaRef = useRef(null);

  const postFeedback = useCallback(() => {
    const postData = async (payload) => {
      const feedbackRepository = new FeedbackRepository();
      await feedbackRepository.create(payload);
      textAreaRef.current.value = '';

      if (typeof onSendFeedback === 'function') {
        onSendFeedback();
      }
    };

    const message = textAreaRef.current.value;

    if (message && message.length > 0) {
      postData({ collaboratorId, message, like: 1 });
    }
  }, [collaboratorId, onSendFeedback]);

  return (
    <FeedbackContainer>
      <textarea
        ref={textAreaRef}
        className='textarea has-fixed-size'
        placeholder={formatMessage({ id: 'collaborator.leaveFeedback.placeholder' })}
      />
      <SendFeedbackButton onClick={postFeedback}>
        <i className='fas fa-paper-plane' />
      </SendFeedbackButton>
    </FeedbackContainer>
  );
};

LeaveFeedback.propTypes = {
  collaboratorId: PropTypes.string.isRequired,
  onSendFeedback: PropTypes.func,
};

export default LeaveFeedback;
