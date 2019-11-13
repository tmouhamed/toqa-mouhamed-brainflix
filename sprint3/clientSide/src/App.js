import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Upload from './components/Upload/Upload';
import MainContent from './components/MainContent/MainContent';


class App extends React.Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Switch>
            <Route path="/upload" component={Upload} />
            <Route path="/videos/:id" component={MainContent} />
            <Route path="/" component={MainContent} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;