import React from 'react';

export default class postList extends React.Component {
    render() {
        return (
            <div className="postList-section">

                <div className="post" id ="TaskID">
                    <div className = "postTitle" id = "title">Title</div>
                    <div className = "postDesc" id = "description">Desc</div>
                    <div className = "deadline" id = "deadline">Deadline</div>
                    <button className = "completedbutton" id = "completed"></button>
                    <span className = "completed">completed</span>
                </div>

                
            </div>




        )
    }


}