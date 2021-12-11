import React from 'react';
import './Comment.css';
import moment from 'moment';



class Comment extends React.Component {
    render() {

        return (
            <div className="comments-card-extention">
                <div className="comment-header">
                    <h6>{this.props.comment.author}</h6>
                    <p>{moment.unix(this.props.comment.created_utc).fromNow()}</p>
                </div>
                <div className="ui fitted divider"></div>
                <div className="comment-text">
                    <p>{this.props.comment.body}</p>
                </div>
            </div>
        )
    }
}

export default Comment;

