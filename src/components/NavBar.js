
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
      <Link to="/flashcards">All Flash Cards</Link>&nbsp; | &nbsp;
      <Link to="/flashcards/new">Create New Flash Card Set</Link>&nbsp; | &nbsp;
      <Link to="" onClick={handleLogout}>Log Out</Link>
    </nav>
  )
}

export default NavBar;