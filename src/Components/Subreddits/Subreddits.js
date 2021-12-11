import React from 'react';
import './Subreddits.css';


const Subreddits = ({ onSubredditClick }) => {


        return (
            <div className="App-subreddits">
                <button onClick={() => onSubredditClick("/r/pics")} className="small compact active ui button" id="subbuttons1">Pics</button>

                <button onClick={() => onSubredditClick("/r/popular")} className="small compact ui button" id="subbuttons2">Popular</button>

                <button onClick={() => onSubredditClick("/r/funny")} className="small compact ui button" id="subbuttons3">Funny</button>

                <button onClick={() => onSubredditClick("/r/gaming")} className="small compact ui button" id="subbuttons4">Gaming</button>

                <button onClick={() => onSubredditClick("/r/football")} className="small compact ui button" id="subbuttons5">Footy</button>

                <button onClick={() => onSubredditClick("/r/NBA")} className="small compact ui button" id="subbuttons6">NBA</button>
            </div>
        )
    };



export default Subreddits;