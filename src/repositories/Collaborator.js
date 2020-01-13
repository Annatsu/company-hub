// Application Modules
import api from '../api';

/**
 * Repository for fetching and handling Collaborator models
 * @class
 */
class CollaboratorRepository {
  /**
   * Fetches all collaborators from the API.
   *
   * @return {Promise<Array<Object>>} an array of collaborators.
   */
  getAll() {
    return api.get('/collaborator').then((response) => response.data);
  }

  /**
   * Fetches data from a single collaborator.
   *
   * @param {String} collaboratorId - collaborator's id
   *
   * @return {Promise<Object>}
   */
  async getSingle(collaboratorId) {
    return api.get(`/collaborator/${collaboratorId}`).then((response) => response.data);
  }
}

export default CollaboratorRepository;
