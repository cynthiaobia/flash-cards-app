import { useState } from 'react';
import * as flashCardsAPI from '../utilities/flashcards-api';
import {useParams} from 'react-router-dom';

function NewFlashCardForm({ flashCardSetId, onFlashCardAdded }) {
  const {id} = useParams();
  const [flashCard, setFlashCard] = useState({ question: '', answer: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFlashCard((prevFlashCard) => ({
      ...prevFlashCard,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newFlashCard = await flashCardsAPI.addCard(flashCard);
      console.log(newFlashCard);
      // Clear the form
      setFlashCard({ question: '', answer: '' });
    } catch (err) {
      console.log('Error adding flash card:', err);
    }
  };

  return (
    <div>
      <h1>Add a New Flash Card</h1>

      <form onSubmit={handleSubmit}>
        <label>Question</label>
        <input
          type="text"
          name="question"
          value={flashCard.question}
          onChange={handleChange}
          required
        />

        <br />

        <label>Answer</label>
        <textarea
          name="answer"
          value={flashCard.answer}
          onChange={handleChange}
          required
        ></textarea>

        <br />

        <input type="submit" value="Add Card" />
      </form>
    </div>
  );
}

export default NewFlashCardForm;
