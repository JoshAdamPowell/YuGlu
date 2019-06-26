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
    }

    render() {
        return (
            <div>
                <div class="login-container">
                    <div className="login-form">
                        <h1>Log in</h1>
                        <form onSubmit = {() => this.handleSubmit()}>
                            <input className="form-input" type="text" value={this.state.username} onChange={(e) => this.setState({username: e.target.value})} name="username" placeholder="Username"></input>
                            <br />
                            <input className="form-input" type="password" value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} name="password" placeholder="Password"></input>
                        </form>
                        <button disabled={!this.validateForm()} type="submit">Log in</button>
                    </div>
                </div>
            </div>
        )
    }
}