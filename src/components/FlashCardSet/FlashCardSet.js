import * as flashCardsApi from '../../utilities/flashcards-api';
import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'


function FlashCardSet() {
  const { id } = useParams();

  const [flashCardSet, setFlashCardSet] = useState([]);
  // const [flashCardSet, setFlashCardSet] = useState({title: '', reccipe: ''});

  useEffect(() => {
    async function getFlashCardSet() {
      try {
        const flashCardSet = await flashCardsApi.getById(id);
        setFlashCardSet(flashCardSet);
      } catch (err) {
        console.log(err);
      }
    }
    getFlashCardSet();
  }, [id]);
  
  const flashCardArr = flashCardSet.flashCards;
  // console.log(flashCardArr)
  return(
    <div>
      <h1>{flashCardSet.subject}</h1>
        <Link to={`/flashcards/${flashCardSet._id}/update`}>
            Edit
        </Link>
        <p>add delete set later</p>
      {/* {
        use conditional here to see if there is a value first before mapping
        flashCardArr.map(
          (flashCard) =>
          <h2 key={flashCard._id}>{flashCard.question}</h2>
        )
      } */}
      {/* add component for each individual card to map, make an array */}
    </div>
  )
}

export default FlashCardSet;