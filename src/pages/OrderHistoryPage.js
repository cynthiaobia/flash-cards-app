
import * as usersService from '../utilities/users-service';

function OrderHistoryPage() {

  const handleCheckToken = async () => {
    const expDate = await usersService.checkToken();
    console.log(expDate)
  }

  return (
    <div>
      <h1>Order History Page</h1>

      <button onClick={handleCheckToken}>
        Check When My Login Expires
      </button>
    </div>
  )
} 

export default OrderHistoryPage;