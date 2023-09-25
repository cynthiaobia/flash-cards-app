import {Link} from 'react-router-dom';
import * as usersService from '../utilities/users-service';

function SettingsPage({user, setUser}) {

  const handleLogout = () => {
    usersService.logOut();
    setUser(null);
  }

  console.log(user)

  return (
    <div>
      <h1>Settings</h1>
      <ul>
        <li>
          <b>Name </b>
          {user.name}
        </li>

        <li>
          <b>Email </b>
          {user.email}
        </li>

        <li>
          <Link to="/settings/update">Edit Information</Link>
        </li>

        <li>
          <Link to="" onClick={handleLogout}>Log Out</Link>
        </li>
      </ul>
      
    </div>
  )
}

export default SettingsPage;