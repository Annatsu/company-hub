// Application Modules
import api from '../api';

/**
 * Repository for fetching and handling feedback models from collaborators.
 * @class
 */
class FeedbackRepository {
  /**
   * Creates a Feedback for a collaborator.
   *
   * @param {Object} payload - an object containing `collaboratorId` and `message`
   *
   * @return {Promise<Object>}
   */
  create(payload) {
    const { collaboratorId } = payload;
    return api.post(`/collaborator/${collaboratorId}/feedback`, payload).then((response) => response.data);
  }

  /**
   * Fetches all feedbacks from a collaborator.
   *
   * @param {String} collaboratorId - collaborator's id
   *
   * @return {Promise<Array<Object>>} an array of feedbacks.
   */
  getAll(collaboratorId) {
    return api.get(`/collaborator/${collaboratorId}/feedback`).then((response) => response.data);
  }

  /**
   * Like a feedback.
   *
   * @param {Object} feedback - feedback object
   * @param {Number} amount - amount of likes to send
   *
   * @return {Promise<Object>}
   */
  like(feedback, amount) {
    const { collaboratorId, id: feedbackId } = feedback;
    return api
      .put(`/collaborator/${collaboratorId}/feedback/${feedbackId}`, { like: amount })
      .then((response) => response.data);
  }

  /**
   * Deletes a feedback entry from the server.
   *
   * @param {Object} feedback - feedback object
   *
   * @return {Promise<Object>}
   */
  delete(feedback) {
    const { collaboratorId, id: feedbackId } = feedback;
    return api.delete(`/collaborator/${collaboratorId}/feedback/${feedbackId}`).then((response) => response.data);
  }
}

export default FeedbackRepository;
