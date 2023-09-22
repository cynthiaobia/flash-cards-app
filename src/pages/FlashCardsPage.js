
import * as usersService from '../utilities/users-service';
import AllFlashCardSets from '../components/AllFlashCardSets/AllFlashCardSets';

function FlashCardsPage() {

  const handleCheckToken = async () => {
    const expDate = await usersService.checkToken();
    console.log(expDate)
  }

  return (
    <div>
      <AllFlashCardSets />

      {/* <button onClick={handleCheckToken}>
        Check When My Login Expires
      </button> */}
    </div>
  )
} 

export default FlashCardsPage;