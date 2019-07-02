import React from 'react';
import './css/dashboard.css';


export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:3001/dashboard/8')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    posts: json
                })
            })
    }
    render() {
        if (this.state.posts.length === 0) {
            return null
        }
        else {
            return (
                <div>
                    <div className="postContainer">
                        {this.state.posts.map((post, index) => {
                            return <div className="post" id="TaskID">
                                <div className="postTitle" id="title">Title : {post.title}</div>
                                <div className="postDesc" id="description">Desc : {post.description}</div>
                                <div className="deadline" id="deadline">Deadline : {post.deadline}</div>
                                <button className="completedbutton" id="completed">Completed</button>


                            </div>
                        })}
                    </div>
                </div>
            )
        }
    }

}
