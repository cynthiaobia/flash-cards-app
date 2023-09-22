import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as flashCardsApi from '../../utilities/flashcards-api';

function UpdateFlashCardSetForm() {
  const { id } = useParams();
  const [flashCardSet, setFlashCardSet] = useState({ subject: '' });

  const handleChange = (e) => {
    setFlashCardSet(
      { 
        ...flashCardSet, 
        subject: e.target.value 
      }
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send a PUT request to update the flash card set
      await flashCardsApi.updateCard({ subject: flashCardSet.subject }, id);
      // Optionally, you can redirect or display a success message here
      console.log(flashCardSet);
    } catch (err) {
      console.error(err);
    }
  }

  const handleDelete = async () => {
    try {
      await flashCardsApi.deleteCard(id);
    } catch (err) {
      console.error('Error deleting flash card set:', err);
    }
  };

  useEffect(() => {
    async function getFlashCardSet() {
      try {
        const fetchedFlashCardSet = await flashCardsApi.getById(id);
        setFlashCardSet(fetchedFlashCardSet);
      } catch (err) {
        console.error('Error fetching flash card set:', err);
      }
    }

    getFlashCardSet();
  }, [id]);

  return (
    <div>
      <h1>Update Flash Card Set</h1>
      <form onSubmit={handleSubmit}>
        <label>Subject</label>
        <input type="text" value={flashCardSet.subject} onChange={handleChange} />
        <input type="submit" value="Update Subject" />
      </form>

      <button onClick={handleDelete}>Delete Flash Card Set</button>
    </div>
  );
}

export default UpdateFlashCardSetForm;