import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Subreddits from '../Subreddits/Subreddits';
import CardArea from '../CardArea/CardArea';

function App() {

  return (
    <div className="App">
      <Header />
      <Subreddits />
      <CardArea />
    </div>
  );
}

export default App;
