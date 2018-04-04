import React, { Component } from 'react';
import M from "materialize-css";
import { Register } from "./RegisterComponent";
import { LogIn } from "./LogInComponent";
import { RegisterForm } from "../services/register";
class LoginRegister extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isRegistered: false
        }
    }

    registerUser = (username, password, name, email) => {

        RegisterForm(username, password, name, email).then(response => response).then(response => console.log(response))


    }

    registerDisplay = () => {
        this.setState({
            isRegistered: true
        })
    }

    logInDisplay = () => {
        this.setState({
            isRegistered: false
        })
    }

    checkRegistration = () => {
        if (this.state.isRegistered) {
            return (
                <Register registerUser={this.registerUser} />
            )
        } else {
            return (<LogIn logInUser={this.logInUser} />)
        }

    }



    render() {
        return (


            <main>
                <div className="container row">
                    <div className="col s6 offset-s6">
                        <div className="row">
                            <p class="waves-effect waves-light btn col s5 " onClick={this.logInDisplay}>Log In</p>
                            <p class="waves-effect waves-light btn col s5 offset-2" onClick={this.registerDisplay}>Register</p>
                            <div className="row card">
                                {this.checkRegistration()}
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        )
    }
}
export { LoginRegister }