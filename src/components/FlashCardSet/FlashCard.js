import { useState } from 'react';

function FlashCard(props) {
  const { flashCard } = props;

  const [isFlipped, setIsFlipped] = useState(false);

  // Function to toggle the isFlipped state
  const flipCard = () => {
    setIsFlipped((prevIsFlipped) => !prevIsFlipped);
  };

  return (
    <div className={`flash-card ${isFlipped ? 'is-flipped' : ''}`} onClick={flipCard}>
      <div className="flash-card-inner">
        <div className="front">
          {/* <h2>Question</h2> */}
          <h3>{flashCard.question}</h3>
        </div>
        <div className="back">
          {/* <h2>Answer</h2> */}
          <h3>{flashCard.answer}</h3>
        </div>
      </div>
      <h4>
        Mark as correct: {flashCard.isCorrect ? <b>Yes</b> : <b>No</b>}
      </h4>
    </div>
  );
}

export default FlashCard;
