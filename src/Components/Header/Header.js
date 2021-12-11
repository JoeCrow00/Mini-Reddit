import React from 'react';
import './Header.css';
import {FaReddit} from "react-icons/fa";
import SearchBar from '../SearchBar/SearchBar';

class Header extends React.Component {
    render() {
        return (
            <div className="App-header">
                <div className="logo">
                    <a href="/"><FaReddit className="redditlogo"/></a>
                    <p>MiniReddit</p>
                </div>
                <SearchBar onSubmit={this.props.onSubmit}/>
            </div>
        )
    }


}



export default Header;