import {Link} from 'react-router-dom';
import * as usersService from '../utilities/users-service';

function SettingsPage({user, setUser}) {

  const handleLogout = () => {
    usersService.logOut();
    setUser(null);
  }

  return (
    <div>
      <h1>Settings</h1>
      <Link to="" onClick={handleLogout}>Log Out</Link>
    </div>
  )
}

export default SettingsPage;