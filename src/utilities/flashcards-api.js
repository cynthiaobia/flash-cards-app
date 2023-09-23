import sendRequest from './send-request';

const BASE_URL = '/api/flashcards';

// Add a flash card set to the collection
// rename create card if time permits
export function addFlashCardSet(data) {
  return sendRequest(BASE_URL, 'POST', data);
}

// get all flash card sets
export function getAll() {
  // return sendRequest(BASE_URL, 'GET');
  return sendRequest(BASE_URL, 'GET');
}

// get flash card set by id
export function getById(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'GET');
}

// update card by id
// used in update flash card set form
export function updateCard(data, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', data);
}

// delete a flash card set by id
export function deleteCard(id) {
  return sendRequest(`${BASE_URL}/${id}`, 'DELETE');
}

// create and add flash card to set
/// working on this!!!
// export function addCard(data, id){
//   return sendRequest(`${BASE_URL}/${id}`, 'PUT', data);
// }
export function addCard(data, id) {
  return sendRequest(`${BASE_URL}/${id}`, 'PUT', data);
}
