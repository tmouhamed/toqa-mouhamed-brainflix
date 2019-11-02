import React from 'react';
import Header from './components/header/header';
import Hero from './components/hero/hero';
import MainContent from './components/mainContent/mainContent';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Hero />
        <MainContent />
      </main>
    </div>
  );
}

export default App;
