import React from 'react';
import './CardArea.css';
import Card from '../Card/Card';


class CardArea extends React.Component {

    render() {
        return (
            <div className="App-cardarea">
                <Card />
                <Card />
                <Card />
            </div>
        )
    }

}

export default CardArea