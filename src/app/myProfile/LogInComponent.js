import React, { Component } from 'react';

export class LogIn extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="input-field col s8 offset-s1">
            <input id="password" type="password" className="validate" />
            <label for="password">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8 offset-s1">
            <input id="email" type="email" className="validate" />
            <label for="email">Email</label>
          </div>

        </div>
        <p className="waves-effect waves-light btn">Log in</p>

      </div>

    )
  }
}