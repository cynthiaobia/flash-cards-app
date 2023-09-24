
import {Link} from 'react-router-dom';
import * as usersService from '../utilities/users-service';

function NavBar({user, setUser}) {

  const handleLogout = () => {
    usersService.logOut();
    setUser(null);
  }

  return(
    <nav>
      <h2>Welcome, {user.name}</h2>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/flashcards">All Flash Cards</Link></li>
        <li><Link to="/settings">Settings</Link></li>
        <li><Link to="" onClick={handleLogout}>Log Out</Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;