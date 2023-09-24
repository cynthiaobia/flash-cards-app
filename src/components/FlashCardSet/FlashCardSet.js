import * as flashCardsApi from '../../utilities/flashcards-api';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import FlashCard from './FlashCard';
import FlashCardNav from './FlashCardNav';

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

  

  const flashCardArr = flashCardSet.flashCards;

  // Handle Navigation Fxns
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handlePreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? flashCardArr.length - 1 : prevIndex - 1
    );
  };

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === flashCardArr.length - 1 ? 0 : prevIndex + 1
    );
  };

  const isFirstCard = currentCardIndex === 0;
  const isLastCard = currentCardIndex === flashCardArr.length - 1;

  return (
    <div>
      <h1>{flashCardSet.subject}</h1>

      {flashCardArr && flashCardArr.length > 0 ? (
        
        <div key={flashCardArr[currentCardIndex]._id}>
          <FlashCard flashCard={flashCardArr[currentCardIndex]} />
          <FlashCardNav
        isFirstCard={isFirstCard}
        isLastCard={isLastCard}
        handlePreviousCard={handlePreviousCard}
        handleNextCard={handleNextCard}
      />
        </div>
      ) : (
        <div>
          <p>No flash cards available in this set.</p>

          <Link to={`/flashcards/${id}/new`}>
            <button>Add Card</button>
          </Link>
          
      </div>
        
        
      )}

      <Link to="/flashcards">Back to all Flash Cards</Link>

    </div>
  );
}

export default FlashCardSet;