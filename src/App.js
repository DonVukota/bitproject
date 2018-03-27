import React, { Component } from 'react';
import './App.css';
import { Header } from '../src/app/partials/Header'
import { Footer } from './app/partials/Footer'
import {Route,Switch} from 'react-router-dom'
import{Main} from './Main'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route to='/' component={Main} />
        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}

export default App;

