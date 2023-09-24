import './App.css';
import { useState } from 'react';
import NewFlashCardSetPage from './pages/NewFlashCardSetPage';
import AuthPage from './pages/AuthPage';
import {Routes, Route} from 'react-router-dom';
import FlashCardsPage from './pages/FlashCardsPage';
import NavBar from './components/NavBar';
import { getUser } from './utilities/users-service';
import FlashCardSet from '../src/components/FlashCardSet/FlashCardSet';
import UpdateFlashCardSetForm from './components/UpdateFlashCardSetForm/UpdateFlashCardSetForm';
import NewFlashCardForm from './components/NewFlashCardForm';
import SettingsPage from './pages/SettingsPage';

function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">

      {user ? (
        <>
          <NavBar user={user} setUser={setUser}/>
          <Routes>
            <Route path="/flashcards/new" element={<NewFlashCardSetPage />} />
            <Route path="/flashcards/:id/update" element={<UpdateFlashCardSetForm />} />
            <Route path="/flashcards/:id/new" element={<NewFlashCardForm />} />
            <Route path="/flashcards" element={<FlashCardsPage />} />
            <Route path="/flashcards/:id" element={<FlashCardSet />} />
            <Route path="/settings" element={<SettingsPage />} />
            
          </Routes>
        </>
      ) 
      : <AuthPage setUser={setUser}/>}

    </main>
  );
}

export default App;
