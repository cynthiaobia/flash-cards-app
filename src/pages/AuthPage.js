
import SignUpForm from "../components/SignUpForm/SignUpForm";
import LoginForm from "../components/LogInForm/LogInForm";

import { useState } from 'react';

function AuthPage({setUser}) {
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <h1>Auth Page</h1>

      <button onClick={() => setShowLogin(!showLogin)}>
        {showLogin ? "Sign Up" : "Log in"}
      </button>
      {
        showLogin ? (
          <LoginForm setUser={setUser}/>
        ) : (
          <SignUpForm setUser={setUser} />
        )
      }
      
    </div>
  )
} 

export default AuthPage;