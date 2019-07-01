import React from 'react';
import './css/Login-Form.css';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleSubmit = event => {
        event.preventDefault();

        fetch("http://localhost:3001/login", {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(this.state)
        })
        .then(res => res.json());
    }

    render() {
        return (
            
            <div>
                <div className="login-container">
                    <div className="login-form">
                        <h1>Log in</h1>
                            <form onSubmit = {() => this.handleSubmit()}>
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
                            </form>
                            <button disabled={!this.validateForm()} type="submit">Log in</button>
                    </div>
                </div>
            </div>
        )
    }
}