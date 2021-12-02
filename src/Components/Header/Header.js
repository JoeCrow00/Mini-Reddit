import React from 'react';
import './Header.css';
import {FaReddit} from "react-icons/fa";
import SearchBar from '../SearchBar/SearchBar';

class Header extends React.Component {
    render() {
        return (
            <div className="App-header">
                <div className="logo">
                    <FaReddit className="redditlogo"/>
                    <p>MiniReddit</p>
                </div>
                <SearchBar />
            </div>
        )
    }


}



export default Header;