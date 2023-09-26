
import { useState } from "react";
import { useParams, Link, useNavigate} from "react-router-dom";
import * as flashCardsApi from '../utilities/flashcards-api';

function NewFlashCardForm() {

  const {id} = useParams();
  const navigate = useNavigate();

  const [flashCard, setFlashCard] = useState({
    question: '',
    answer: ''
  })

  const handleChange = (e) => {
    setFlashCard({
      ...flashCard,
      [e.target.name]: e.target.value
    })
  }

  // this code is testing to make sure state is updated and logged to console in browser
  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   const newFlashCard = {...flashCard};
  //   setFlashCard(newFlashCard);

  //   console.log('flash card: ', flashCard, 'New flash card: ', newFlashCard);
  // }

  const handleSubmit = async (e) => {
      e.preventDefault();
      const newFlashCard = {...flashCard};
      setFlashCard(newFlashCard);
    try {
      await flashCardsApi.addCard(newFlashCard, id);

      navigate(`/flashcards/${id}/update`);

    } catch (err) {
      console.log(err);
    }
  }

  // useEffect(() => {
  //   async function getFlashCard() {
  //     try {
  //       const fetchedFlashCard = await flashCardsApi.getById(id);
  //       setFlashCard(fetchedFlashCard);
  //     } catch (err) {
  //       console.error('Error fetching flash card set:', err);
  //     }
  //   }

  //   getFlashCard();
  // }, [id]);

  return (
    <div>
      <h1>Add Flash Card to</h1>

      <form onSubmit={handleSubmit}>

        <label>Question</label>
        <br />
        <input 
          type="text" 
          name="question" 
          value={flashCard.question}
          onChange={handleChange}
          required
        />
        <br />

        <label>Answer</label>
        <br />
        <input 
          type="text" 
          name="answer" 
          value={flashCard.answer}
          onChange={handleChange}
          required 
        />

        <br />

        <input type="submit" value="Add Card" />

      </form>
      <Link to={`/flashcards/${id}/update`}>
        <button>Cancel</button>
      </Link>
    </div>
  )
}

export default NewFlashCardForm;