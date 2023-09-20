import './App.css';
import { useState } from 'react';
import NewFlashCardSetPage from './pages/NewFlashCardSetPage';
import AuthPage from './pages/AuthPage';
import {Routes, Route} from 'react-router-dom';
import FlashCardsPage from './pages/FlashCardsPage';
import NavBar from './components/NavBar';
import { getUser } from './utilities/users-service';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">

      {user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/flashcards/new" element={<NewFlashCardSetPage />} />
            <Route path="/flashcards" element={<FlashCardsPage />} />
          </Routes>
        </>
      ) 
      : <AuthPage setUser={setUser}/>}

    </main>
  );
}

export default App;
