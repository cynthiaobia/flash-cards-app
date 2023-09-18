
import {Link} from 'react-router-dom';
import * as usersService from '../utilities/users-service';

function NavBar({user, setUser}) {

  const handleLogout = () => {
    usersService.logOut();
    setUser(null);
  }

  return(
    <nav>
      <h2>Welcom, {user.name}</h2>
      <Link to="/orders">Order History</Link>&nbsp; | &nbsp;
      <Link to="/orders/new">New Order</Link>
      <Link to="" onClick={handleLogout}>Log Out</Link>
    </nav>
  )
}

export default NavBar;