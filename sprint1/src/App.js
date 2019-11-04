import React from 'react';
import Header from './components/header/header';
import MainContent from './components/mainContent/mainContent';
import { mainVideos, sideVideos } from './data/data';


class App extends React.Component {
  state = {
    mainVideos,
    sideVideos
  }
  render() {
    return (
      <div className="App">
        <Header />
        <MainContent mainVideo={this.state.mainVideos} sideVideo={this.state.sideVideos} />
      </div>
    );
  }
}

export default App;
