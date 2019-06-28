import React from 'react';
import SignUp from './components/sign-up/sign-up';
import Login from './components/Login/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <Login></Login>
        <SignUp></SignUp>

      </header>
    </div>
  )
}

export default App;
