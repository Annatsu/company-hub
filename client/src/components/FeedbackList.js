// React
import styled from '@emotion/styled';

// Components
import FeedbackListItem from './FeedbackListItem';

const FeedbackList = styled.ul`
  list-style: none;
`;

FeedbackList.Item = FeedbackListItem;
export default FeedbackList;
