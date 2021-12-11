import React from 'react';
import './SearchBar.css';


class SearchBar extends React.Component {

    state = { term: '' };

    onInputChange = event => {
        this.setState({ term: event.target.value })

        //console.log(this.state)
    };

    onFormSubmit = event => {
        event.preventDefault();

        console.log(this.state.term);
        this.props.onSubmit(this.state.term);
    };


    render() {
        return (
            <div className="App-searchbar">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div>
                        <input  
                            className="prompt" 
                            type="text" 
                            placeholder="Search Reddit..."
                            value={this.state.term}
                            onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }

}

export default SearchBar