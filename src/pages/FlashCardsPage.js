
import * as usersService from '../utilities/users-service';
import FlashCardSets from '../components/FlashCardSets/FlashCardSets';

function FlashCardsPage() {

  const handleCheckToken = async () => {
    const expDate = await usersService.checkToken();
    console.log(expDate)
  }

  return (
    <div>
      <FlashCardSets />

      {/* <button onClick={handleCheckToken}>
        Check When My Login Expires
      </button> */}
    </div>
  )
} 

export default FlashCardsPage;