import { useState } from 'react';

function FlashCard(props) {
  const { flashCard } = props;

  const [showResult, setShowResult] = useState(false);

  // Function to toggle the showResult state
  const flipCard = () => {
    setShowResult((prevShowResult) => !prevShowResult);
  };

  return (
    <div>
      <h2 onClick={flipCard}>
        {showResult ? flashCard.answer : flashCard.question}
      </h2>
      <h4>
        Mark as correct: {flashCard.isCorrect ? <b>Yes</b> : <b>No</b>}
      </h4>
    </div>
  );
}

export default FlashCard;
