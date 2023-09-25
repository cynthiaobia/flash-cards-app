
import {Link} from 'react-router-dom';
import * as usersService from '../utilities/users-service';

function NavBar({user, setUser}) {

  const handleLogout = () => {
    usersService.logOut();
    setUser(null);
  }

  return(
    <div>

      <div className='nav'>
        <div className='nav-left'>
          <Link to="/">Home</Link>
          <Link to="/flashcards">Flash Cards</Link>
        </div>

        <div className='nav-right'>
          <Link to="/settings">Settings</Link>
          {/* <Link to="" onClick={handleLogout}>Log Out</Link> */}
        </div>
      </div>

      <h2>Welcome, {user.name}</h2>
    </div>
    
    
  )
}

export default NavBar;