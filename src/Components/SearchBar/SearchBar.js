import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {
    
    render() {
        return (
            <div className="App-searchbar">
                <form className="ui form">
                    <div ClassName="">
                        <input className="prompt" type="text" placeholder="Search Reddit..."/>
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar