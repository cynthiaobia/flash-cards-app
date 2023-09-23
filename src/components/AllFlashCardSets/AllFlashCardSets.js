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
      <h1>Flash Card Sets</h1>

      <nav>
      {flashCards.map(
        flashCard =>
        <div key={flashCard._id}>
          <Link id={flashCard._id} to={`/flashcards/${flashCard._id}`}>
            {flashCard.subject}
          </Link>
          <br />
          <Link to={`/flashcards/update/${flashCard._id}`}>Edit Set</Link>
          <br /><br />
        </div>
      )}
      </nav>

      <br />
      <Link to="/flashcards/new">Add a New Flash Card Set</Link>

    </div>
  )
}

export default AllFlashCardSets;