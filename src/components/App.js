import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube.js';

class App extends React.Component {

  state = {
    videos: []
  }

  onSearchSubmit = async (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    })
  }

  render() {
    return (
      <div className='ui container'>
        <SearchBar onSearchSubmit={this.onSearchSubmit}/>
      </div>
    )
  }
}

export default App;
