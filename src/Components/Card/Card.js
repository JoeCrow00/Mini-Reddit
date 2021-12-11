import React from 'react';
import Markdown from 'markdown-to-jsx';
import './Card.css';
import {FaRegCommentDots} from "react-icons/fa";
import moment from 'moment';
import Reddit from '../../api/Reddit';
import Comment from '../Comment/Comment';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


class Card extends React.Component {

    //
    // new code for on comment click
    //

    state = {
        commentsToggle: false,
        comments: [],
        loadingComments: false
    };

    onCommentClick = async (commentPermalink) => {

        this.setState ({
            loadingComments: true
        })

        const response = await Reddit.get(`${commentPermalink}.json`);
        
        if (this.state.commentsToggle === true) {
            this.setState ({
                commentsToggle: false,
                loadingComments: false
            })
        } else {
        this.setState ({
            commentsToggle: true,
            comments: response.data[1].data.children,
            loadingComments: false
          })

        console.log(response.data[1].data.children);

    
        }
      };
    
    renderComments() {

        let commentsLoading = this.state.loadingComments;

        if (commentsLoading === true) {
            return (
                <SkeletonTheme baseColor="#f5bc9e" highlightColor="#ffae85">
                    <div className="loading-comments">
                        <h1><Skeleton count={5} /></h1>
                    </div>
                </SkeletonTheme>
            );
        }

        if (this.state.commentsToggle === true) {
            return (
                <div className="comments-container">
                    <div className="ui divider"></div>

                    {
                    this.state.comments.map(comment => {
                        return <Comment
                                comment={comment.data}
                                key={comment.data.id}
                            />
                    })
                }
                <br/>
                </div>
                
            )
        }
    }
    // new codes ends 


    renderPostImage() {
        if (this.props.post.post_hint === 'image') {
            return (
                <div className="post-image-container">
                    <img 
                        src={this.props.post.url} 
                        alt='' 
                        className="post-image"
                    />
                </div>
            )
        }
    }

    renderPostVideo() {
        if (this.props.post.is_video) {
            return (
                <div className="post-video-container">
                    <video className="post-video" controls>
                        <source
                            src={this.props.post.media.reddit_video.fallback_url} 
                            alt='' 
                            type="video/mp4"
                        />
                    </video>
                </div>
            )
        }
    }

    renderPostRichVideo() {
        if (this.props.post.post_hint === "rich:video") {
            return (
                <div className="post-rich-video-container">
                    <iframe frameBorder="0" width="100%" height="100%" allowFullScreen className="post-rich-video" title="video player" src={this.props.post.url}></iframe>
                </div>
            )
        }
    }

    renderPostText() {
        if (this.props.post.selftext) {
            return (
                <div className="post-text-container">
                    <Markdown>
                        {this.props.post.selftext}
                    </Markdown>
                </div>
            )
        }
    }

    renderPostLink() {
        if (this.props.post.post_hint === 'link') {
            return (
                <h4>
                    <a href={this.props.post.url}>
                        {this.props.post.url}
                    </a>
                </h4>
            )
        }
    }

    render() {
        return (
            <div className="App-card">
                <div className="post-top-info">
                    <h5><span id="subredname">{this.props.post.subreddit_name_prefixed} </span>| posted {moment.unix(this.props.post.created_utc).fromNow()}</h5>
                </div>
                <div className="post-title-container">
                    <h2 className="post-title">{this.props.post.title}</h2>
                </div>
                <div className="ui divider"></div>
                <div className="post-content">
                    {this.renderPostImage()}
                    {this.renderPostVideo()}
                    {this.renderPostRichVideo()}
                    {this.renderPostText()}
                    {this.renderPostLink()}
                </div>
                <div className="ui divider"></div>
                <div className="post-footer">
                    <h4 id="post-author">{this.props.post.author}</h4>
                    <div id="comment-logo-container"><FaRegCommentDots onClick={() => this.onCommentClick(this.props.post.permalink)} id="comment-logo" />{this.props.post.num_comments}</div>
                </div>
                    {this.renderComments()}
            </div>
        )
    }

}

export default Card;