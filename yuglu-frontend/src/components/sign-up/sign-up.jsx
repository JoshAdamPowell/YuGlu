import React from 'react';
export default class SignUpPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleInputChange(event) {
        const name = event.target.name;
        this.setState({
            [name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <label>
                    Username:
                    <input
                        name="username"
                        type="text"
                        value={this.state.userName}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <label>
                    First Name:
                    <input
                        name="firstname"
                        type="text"
                        value={this.state.firstName}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <label>
                    Last Name:
                    <input
                        name="lastname"
                        type="text"
                        value={this.state.lastName}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <label>
                    E-mail address:
                    <input
                        name="email"
                        type="text"
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