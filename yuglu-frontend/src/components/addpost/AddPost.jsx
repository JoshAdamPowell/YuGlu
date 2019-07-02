import React from 'react';
import css from './addpost.css'

export default class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleInputChange(event) {
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
                    <input
                        name="title"
                        placeholder="Title"
                        className="namebox" 
                        type="text"
                        value={this.state.title}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <label>
                    <input
                        name="description"
                        placeholder="Description"
                        className="textbox"
                        type="text"
                        value={this.state.description}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <label>
                    Deadline:
                    <input
                        name="deadline"
                        className="deadlinebox"
                        type="date"
                        value={this.state.deadline}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <label>
                    Completed:
                    <select
                        name="completed"
                        type="text"
                        value={this.state.completed}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <input
                    type="submit"
                    value="Submit"/>
            </form>
        );
    }
}