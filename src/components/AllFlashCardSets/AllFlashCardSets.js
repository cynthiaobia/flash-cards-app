import { useState, useEffect} from 'react';
import * as flashCardsApi from '../../utilities/flashcards-api';
import FlashCardSet from '../FlashCardSet/FlashCardSet';
import {Link} from 'react-router-dom';

function AllFlashCardSets () {
  const [flashCards, setFlashCards] = useState([]);

  useEffect(() => {
    async function getFlashCards() {
      try {
        const flashCards = await flashCardsApi.getAll();
        setFlashCards(flashCards);
      } catch (err) {
        console.log(err);
      }
    }
    getFlashCards();
  }, []);
  
  // console.log(flashCards);

  return (
    <div>
      <h1>All Flash Card Sets</h1>

      <nav>
      {flashCards.map(
        flashCard =>
        <div key={flashCard._id}>
          <Link id={flashCard._id} to={`/flashcards/${flashCard._id}`}>
            {flashCard.subject}
          </Link>
          <br />
          <Link id={flashCard._id} to={`/flashcards/${flashCard._id}/update`}>
            Edit
          </Link>
          <br />
          <br />
        </div>
      )}
    </nav>

    <Link to="/flashcards/new">Create New Flash Card Set</Link>

      {/* {flashCards.map(
        (flashCard, i) =>
        <div key={flashCard._id}>
          <FlashCardSet id={flashCard._id} flashCardSet={flashCard} />
          <a href={`/flashcards/${flashCard._id}`}>{flashCard.subject}</a>
        </div>
      )} */}

    </div>
  )
}

export default AllFlashCardSets;