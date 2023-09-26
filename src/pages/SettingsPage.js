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
      
      <div>
      <b>Name </b>
      {user.name}
      </div>

      <div>
      <b>Email </b>
      {user.email}
      </div>

      <div>
      <Link to="/settings/update">
        <button>
          Edit Info
        </button>
      </Link>
      </div>

      <div>
      <Link to="" onClick={handleLogout}>Log Out</Link>
      </div>
      

      

      

      
      
    </div>
  )
}

export default SettingsPage;