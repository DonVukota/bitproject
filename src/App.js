import React, { Component } from 'react';
import './App.css';
import { FeedPage } from "./app/postFeed/FeedPage"
import { Header } from '../src/app/partials/Header'
import { Footer } from './app/partials/Footer'
import {Route,Switch} from 'react-router-dom'


class App extends Component {
  render() {
    return (



      <React.Fragment>
        <Header />
        <Switch>
          <Route to='/' component={FeedPage} />
        </Switch>
        <Footer />
      </React.Fragment>

    )
  }
}

export default App;

