
function FlashCard (props) {
  const {flashCard} = props;

  return(
    <div>
      <h2>{flashCard.question}</h2>
      <h3>{flashCard.answer}</h3>
      <h4>
        Mark as correct: 
        {flashCard.isCorrect ? <b>Yes</b> : <b>No</b>}
      </h4>

      <button>Edit Card</button>
    </div>
  )
}

export default FlashCard;