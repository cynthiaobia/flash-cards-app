import { useState } from 'react';
import * as flashCardsAPI from '../../utilities/flashcards-api';
import { Link, useNavigate } from 'react-router-dom';

function NewFlashCardSetForm({ user, setUser }) {
  const navigate = useNavigate();

  const [subject, setSubject] = useState('');

  const handleChange = (e) => {
    setSubject(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const newFlashCardSet = await flashCardsAPI.addFlashCardSet({
        subject
      });

      console.log('Flash card set created:', newFlashCardSet);

      // clear input
      setSubject('');
      // later navigate to add cards
      navigate(`/flashcards/${newFlashCardSet._id}`)
    } catch (err) {
      console.error('Error creating flash card set:', err);
    }
  };

  

  return (
    <div>
      <h1>Create a New Flash Card Set</h1>

      <form onSubmit={handleSubmit}>
        <label>Subject</label>
        <br />
        <input
          type='text'
          name='subject'
          value={subject}
          onChange={handleChange}
          required
        />
        <br />
        <input type='submit' value='Create Set' />
      </form>

      <Link to="/flashcards">
        <button>
          Cancel
        </button>
      </Link>
    </div>
  );
}

export default NewFlashCardSetForm;
