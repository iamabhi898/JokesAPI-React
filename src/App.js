import React, { useState } from 'react';
import oneLinerJoke from 'one-liner-joke';

function App() {

  const [joke, setJoke] = useState('When you stop believing in Santa Claus is when you start getting clothes for Christmas!');

  function handleClick() {
    const getRandomJoke = oneLinerJoke.getRandomJoke();
    setJoke(getRandomJoke.body);
    document.querySelector('p').innerHTML = joke;
  }

  return (
    <div className="App">
      <div className="container">
        <div className="back-container" />
        <p>Ha Ha Click ME !</p>
        <button onClick={handleClick}>😂</button>
      </div>
    </div>
  );
}

export default App;
