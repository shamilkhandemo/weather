import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { BgColor, Form, ItemCenterCenter } from '../styles/indexComponents';

class Login extends Component {

    state = {
        login: false
    };

    checkUser(event) {
        event.preventDefault();
        var user = document.getElementById('form__user');
        var password = document.getElementById('form__password');
        if ((user.value == "user") && (password.value == "12345")) {
            this.setState({
                login: true
            })
        }
    }

    render() {
        return (
            (!this.state.login) ? 
            (
            <BgColor>
                    <ItemCenterCenter>
                            <h1>Welcome to Weather Data!</h1>
                            <Form action="" onSubmit = {this.checkUser.bind(this)} id = 'form'>

                                <div className="flex-center-center">
                                    <input type="text" id = 'form__user' className = "input" placeholder = "username" autoFocus required/>
                                </div>
                                
                                <div className="flex-center-center">
                                    <input type="password" id = 'form__password' className = "input" placeholder = "password" required/>
                                </div>
                                
                                    <div className="flex-center-center">
                                        <button className = "button" type = "submit">
                                            login
                                        </button>
                                    </div>
                            </Form>
                        </ItemCenterCenter>
                </BgColor>
            )
            : 
            (<Redirect to = "/weather"/>)
        );
    }
}

export default Login;