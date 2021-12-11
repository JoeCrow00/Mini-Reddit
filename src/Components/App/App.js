import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Subreddits from '../Subreddits/Subreddits';
import CardArea from '../CardArea/CardArea';
import Reddit from '../../api/Reddit';



class App extends React.Component {

  state = { 
    posts: [], 
    selectedSubreddit: null 
  };

  componentDidMount() {
    this.onSubredditClick('top');
  }

  onSearchSubmit = async (term) => {

    this.setState ({
      posts: []
    })

    const response = await Reddit.get('/search.json', {
      params: { q: term }
    });

    console.log(response.data.data.children);

    this.setState ({
      posts: response.data.data.children,
      selectedSubreddit: null
    })
  };

  onSubredditClick = async (subReddit) => {

    this.setState ({
      posts: []
    })

    const response = await Reddit.get(`${subReddit}.json`);

    this.setState ({
      posts: response.data.data.children,
      selectedSubreddit: subReddit
    })
  };


  render() {
    return (
      <div className="App">
        <Header onSubmit={this.onSearchSubmit} />
        <Subreddits onSubredditClick={this.onSubredditClick} selectedSubreddit={this.state.selectedSubreddit} />
        <CardArea posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
