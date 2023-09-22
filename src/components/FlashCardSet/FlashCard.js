
function FlashCard (props) {
  const {question, answer, isCorrect} = props.flashCard;

  return(
    <div>
      <h2>{question}</h2>
      <h3>{answer}</h3>
      <h4>
        Mark as correct: 
        {isCorrect ? <b>Yes</b> : <b>No</b>}
      </h4>
    </div>
  )
}

export default FlashCard;