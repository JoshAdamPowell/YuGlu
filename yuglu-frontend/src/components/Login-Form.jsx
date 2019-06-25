import React from 'react';
import '../css/Login-Form.css';

export default class LoginForm extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div class="login-container">
                    <div className="login-form">
                        <h1>Log in</h1>
                        <form>
                            <input className="form-input" type="text" name="userName" placeholder="Username"></input>
                            <br />
                            <input className="form-input" type="password" name="password" placeholder="Password"></input>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}