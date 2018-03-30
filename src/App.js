import React, { Component } from 'react';
import './App.css';
import { FeedPage } from "./app/postFeed/FeedPage"
import { Header } from '../src/app/partials/Header'
import { Footer } from './app/partials/Footer'
import { Route, Switch } from 'react-router-dom'
import { ViewPostDetails } from './app/viewPostDetails/PostDetails'
import { MyProfilePage } from './app/myProfile/MyProfilePage'
import { PeoplePage } from './app/peoplePage/PeoplePage'



class App extends Component {
  render() {
    return (



      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path='/' component={FeedPage} />
          <Route exact path='/PostDetails/:id/:type' component={ViewPostDetails} />
          <Route exact path='/Profile/' component={MyProfilePage} />
          <Route exact path='/People/' component={PeoplePage} />
        </Switch>
        <Footer />
      </React.Fragment>

    )
  }
}

export default App;

