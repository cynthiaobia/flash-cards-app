import sendRequest from './send-request';

const BASE_URL = '/api/flashcards';

// Add a flash card set to the collection
export function addFlashCardSet(data) {
  return sendRequest(BASE_URL, 'POST', data);
}

// get all flash card sets
export function getAll() {
  return sendRequest(BASE_URL);
}

// get flash card set by id
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}