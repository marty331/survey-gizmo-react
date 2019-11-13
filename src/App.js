import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Survey from './components/Survey';
import Product from './components/Product';
import Landing from './components/Landing';
import {BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path='/' render={props => (
        <React.Fragment>
          <Landing />
        </React.Fragment>
      )} />

      <Route path='/survey' component={Survey} />
      <Route path='/product' component={Product} />
    </div>
    </Router>
  );
}

export default App;
