
function FlashCardNav({ isFirstCard, isLastCard, handlePreviousCard, handleNextCard }) {
  return (
    <div className="navigation">
      {!isFirstCard && (
        <button onClick={handlePreviousCard} className="prev">Previous</button>
      )}
      {!isLastCard && (
        <button onClick={handleNextCard} className="next">Next</button>
      )}
    </div>
  );
}

export default FlashCardNav;