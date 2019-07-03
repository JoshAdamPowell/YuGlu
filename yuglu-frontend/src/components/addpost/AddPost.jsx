import React from 'react';
import css from './addpost.css'


export default class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            name: e.target.value
           
        });
        console.log(this.state.name)
    }

    handleSubmit(event) {
        event.preventDefault();
    fetch("http://localhost:3001/addnew", {
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
                <div className="inputfield">
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
                <label className="deadline">
                    Deadline:
                    <input
                        name="deadline"
                        className="deadlinebox"
                        type="date"
                        value={this.state.deadline}
                        onChange={(e) => this.handleInputChange(e)} />
                </label>
                <br />
                <label className="completed">
                    <select
                        name="completed"
                        defaultValue={this.state.completed}                      
                        onChange={this.handleChange}>
                        <option value="Complete=">Complete</option >
                        <option value="Incomplete">Incomplete</option >
                        </select>
                </label>
                <br />
                <input
                    className="button"
                    type="submit"
                    value="Submit"/>
            </div>                              
            </form>
        );
    }
}


