
import { useState } from "react";

function NewFlashCardForm() {

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

  const handleSubmit = (e) => {
    e.preventDefault();

    const newFlashCard = {...flashCard};
    setFlashCard(newFlashCard);

    console.log('flash card: ', flashCard, 'New flash card: ', newFlashCard);
  }

  return (
    <div>
      <h1>Create a Flash Card</h1>

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
    </div>
  )
}

export default NewFlashCardForm;