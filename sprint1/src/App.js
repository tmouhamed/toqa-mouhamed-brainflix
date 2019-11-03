import React from 'react';
import Header from './components/header/header';
import MainContent from './components/mainContent/mainContent';
import { mainVideos, sideVideos } from './data/data';


function App() {
  return (
    <div className="App">
      <Header />
      <MainContent mainVideo={mainVideos} sideVideo={sideVideos}/>
    </div>
  );
}

export default App;
