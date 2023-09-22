import * as flashCardsApi from '../../utilities/flashcards-api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import FlashCard from './FlashCard';

function FlashCardSet() {
  const { id } = useParams();

  const [flashCardSet, setFlashCardSet] = useState({ subject: '', flashCards: [] });

  useEffect(() => {
    async function getFlashCardSet() {
      try {
        const fetchedFlashCardSet = await flashCardsApi.getById(id);
        setFlashCardSet(fetchedFlashCardSet);
      } catch (err) {
        console.log(err);
      }
    }
    getFlashCardSet();
  }, [id]);

  const handleDelete = async () => {
    try {
      await flashCardsApi.deleteCard(id);
      // Handle successful deletion, e.g., navigate back to a list page.
    } catch (err) {
      console.error('Error deleting flash card set:', err);
    }
  };

  const flashCardArr = flashCardSet.flashCards;

  return (
    <div>
      <h1>{flashCardSet.subject}</h1>
      <Link to={`/flashcards/${flashCardSet._id}/update`}>Edit</Link>
      <button onClick={handleDelete}>Delete Flash Card Set</button>
      <FlashCard />
      {flashCardArr && flashCardArr.length > 0 ? (
        flashCardArr.map((flashCard) => (
          <h2 key={flashCard._id}>{flashCard.question}</h2>
        ))
      ) : (
        <p>No flash cards available in this set.</p>
      )}
    </div>
  );
}

export default FlashCardSet;