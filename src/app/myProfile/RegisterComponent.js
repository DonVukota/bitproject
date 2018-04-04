import React, { Component } from 'react';
import '../../App.css';
class Register extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>

        <div className="row">
          <div class="input-field col s8 offset-s1">
            <input id="first_name" type="text" class="validate" />
            <label for="first_name">First Name</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s8 offset-s1 ">
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
        <p className="waves-effect waves-light btn">Register</p>

      </div>

    )
  }
}

export { Register }