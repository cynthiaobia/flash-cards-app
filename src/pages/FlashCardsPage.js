
import * as usersService from '../utilities/users-service';

function FlashCardsPage() {

  const handleCheckToken = async () => {
    const expDate = await usersService.checkToken();
    console.log(expDate)
  }

  return (
    <div>
      <h1>All Flash Cards</h1>

      {/* <button onClick={handleCheckToken}>
        Check When My Login Expires
      </button> */}
    </div>
  )
} 

export default FlashCardsPage;