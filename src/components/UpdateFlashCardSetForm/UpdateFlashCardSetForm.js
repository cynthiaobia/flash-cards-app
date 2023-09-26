import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import * as flashCardsApi from '../../utilities/flashcards-api';

function UpdateFlashCardSetForm() {
  const { id } = useParams();
  const [flashCardSet, setFlashCardSet] = useState({ subject: '' });
  const [subject, setSubject] = useState('');
  const navigate = useNavigate();

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
      await flashCardsApi.updateCard({ subject: flashCardSet.subject }, id);
      console.log(flashCardSet);
      navigate("/flashcards");
    } catch (err) {
      console.error(err);
    }
  }

  const handleDelete = async () => {
    try {
      await flashCardsApi.deleteCardSet(id);
      console.log('deleted successfully')
      navigate("/flashcards");
    } catch (err) {
      console.error('Error deleting flash card set:', err);
    }
  };

  useEffect(() => {
    async function getFlashCardSet() {
      try {
        const fetchedFlashCardSet = await flashCardsApi.getById(id);
        setFlashCardSet(fetchedFlashCardSet);
        setSubject(fetchedFlashCardSet.subject)
      } catch (err) {
        console.error('Error fetching flash card set:', err);
      }
    }

    getFlashCardSet();
  }, [id]);

  return (
    <div>
      <h1>Edit {subject} Flash Cards</h1>

      {/* form to edit subject */}
      <form onSubmit={handleSubmit}>
        <label>Subject</label>
        <input type="text" value={flashCardSet.subject} onChange={handleChange} />
        <input type="submit" value="Update Subject" />
      </form>

      

      <Link to={`/flashcards/${id}/new`}>
        <button>Add Card</button>
      </Link>
      
      <button onClick={handleDelete}>Delete Flash Card Set</button>

      {/* change to a button later for styling */}
      <Link to={`/flashcards/${id}`}>
        <button>
          Cancel
        </button>
      </Link>

      {/* list all cards in set */}
      {
        (flashCardSet.flashCards) ? (
        flashCardSet.flashCards.map(
          (flashcard) => (
            <div key={flashcard._id} className='card-info-bg'>
              <p><b>{flashcard.question}</b></p>
               <p><i>{flashcard.answer}</i></p>
               <p>
                <Link to="">
                  Edit Card
                </Link>
                <Link to={`/flashcards/${id}/delete-card/${flashcard._id}`}>
  Delete Card
</Link>
               </p>
            </div>
          )
        )) :
        <p></p>
      }

      <Link to={`/flashcards/${id}`}>
        Back to {subject} Flash Cards
      </Link>

    </div>
  );
}

export default UpdateFlashCardSetForm;