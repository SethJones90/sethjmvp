import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import './App.css';
import Landing from './components/Landing';
import WhyMe from './components/WhyMe';
import GetInTouch from './components/GetInTouch';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={ Landing }/>
          <div className="page">
            <Route exact path="/why-me" component={WhyMe}></Route>
            <Route exact path="/get-in-touch" component={GetInTouch}></Route>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
