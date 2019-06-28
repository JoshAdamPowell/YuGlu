import React from 'react';
export default class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleInputChange(event) {
        // if(event.length < 1) {
        //     return ("Please enter details in the required fields")
        // } else {
        const target = event.target;
        const name = target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    fetch("http://localhost:3001/signup", {
        method: 'POST',
        cache: 'no-cache', 
        credentials: 'same-origin', 
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow', 
        referrer: 'no-referrer', 
        body: JSON.stringify(this.state), 
    })
    .then(response => response.json()); 
    }
    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Username:
                    <input
                        name="userName"
                        type="text" 
                        // required="true"
                        value={this.state.userName}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        // required="true"
                        value={this.state.password}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <label>
                    First Name:
                    <input
                        name="firstName"
                        type="text"
                        // required="true"
                        value={this.state.firstName}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        name="lastName"juk
                        // type="text"
                        // required= "true"
                        value={this.state.lastName}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <label>
                    E-mail address:
                    <input
                        name="email"
                        type="text"
                        // required="true"
                        value={this.state.email}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <input
                    type="submit"
                    value="Submit" />
            </form>
        );
    }
}