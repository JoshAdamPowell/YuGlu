import React from 'react';
import './css/Login-Form.css';
import { Redirect, Link } from 'react-router-dom';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            error: ''
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    onSuccess(){
        return <Redirect to="/login" />;
    }

    onError(){
        this.setState({error: 'That username and password did not match.'});
        document.getElementById('err-container').style.visibility = 'visible'
    }

    handleSubmit() {
        fetch("http://localhost:3001/login", {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            referrer: 'no-referrer',
            body: JSON.stringify(this.state)
        })
        .then(response => {
            if (response.status === 200){
                this.onSuccess();
                window.location.href = 'http://localhost:3000/dashboard';
            }
            if (response.status === 400){
                this.onError();
            }
            return response.json()})
        .then(body => console.log(body))
    }

    render() {
        return (
            <div>
                <div className="login-container">
                    <div className="login-form">
                        <h1>Log in</h1>
                            <div>
                                <input 
                                    className="form-input" 
                                    name="username"
                                    type="text" 
                                    value={this.state.username} 
                                    onChange={(e) => this.setState({username: e.target.value})} 
                                    placeholder="Username" />
                                <br />
                                <input 
                                    className="form-input"
                                    name="password"
                                    type="password" 
                                    value={this.state.password} 
                                    onChange={(e) => this.setState({password: e.target.value})} 
                                    placeholder="Password" />
                                    <br/>
                                    <button className="submit-btn" disabled={!this.validateForm()} onClick={() => this.handleSubmit()} type="submit">Log in</button>
                            </div>
                            <div className="error-msg-container" id="err-container">
                                <span className="error-msg">{this.state.error}</span>
                            </div>
                    </div>
                </div>
            </div>
        )
    }
}