import React from 'react';
import NavBar from './components/NavBar';
import './styles/globals.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar/>
      </header>
      <body className='App-body'>
        <h1>hello</h1>
      </body>
    </div>
  );
}

export default App;
