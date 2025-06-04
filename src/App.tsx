import React from 'react';
import NavBar from './components/NavBar';
import './styles/globals.scss';
import HomeSection from './components/HomeSection';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
      </header>
      <main className="App-body">
  <HomeSection/>
</main>
    </div>
  );
}

export default App;
