import React from 'react';
import LoginForm from './Login-Form';
import YuGluMast from './YuGlu-Mast';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <header>
                    <YuGluMast></YuGluMast>
                </header>
                <LoginForm></LoginForm>
            </div>
        )
    }
}