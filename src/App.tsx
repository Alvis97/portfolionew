import React from 'react';
import NavBar from './components/NavBar';
import './styles/globals.scss';
import HomeSection from './components/HomeSection';
import Footer from './components/Footer';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
       <NavBar/>
      </header> */}
      <main className="App-body">
  <HomeSection isDarkmodeSelected={false}/>
  {/* <About/>
  <Projects/> */}

</main>
     {/* <Footer/> */}
    </div>
  );
}

export default App;
