import sendRequest from './send-request';

const BASE_URL = '/api/flashcards';

// Add a flash card set to the collection
export function addFlashCardSet(data) {
  return sendRequest(BASE_URL, 'POST', data);
}