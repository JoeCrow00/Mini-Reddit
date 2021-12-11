import React from 'react';
import './CardArea.css';
import Card from '../Card/Card';
import Skeleton, {SkeletonTheme} from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';


class CardArea extends React.Component {

    render() {

        

        if (this.props.posts.length === 0 ) {
            return (
                <SkeletonTheme borderRadius="20px" height="600px" baseColor="#ffd3bb" highlightColor="#ff8243">
                    <div className="loading-cards">
                        <h1><Skeleton count={1} /></h1>
                    </div>
                </SkeletonTheme>
            )
        }

        return (
            <div className="App-cardarea">
                {
                    this.props.posts.map(post => {
                        return <Card
                                post={post.data}
                                key={post.data.id}
                            />
                    })
                }
            </div>
        )
    }

}

export default CardArea