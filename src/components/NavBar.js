
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
      <Link to="/">Home</Link>&nbsp; | &nbsp;
      <Link to="/flashcards">Flash Cards</Link>&nbsp; | &nbsp;
      {/* Settings, under this put edit user stuff and log out */}
      <Link to="" onClick={handleLogout}>Log Out</Link>
    </nav>
  )
}

export default NavBar;