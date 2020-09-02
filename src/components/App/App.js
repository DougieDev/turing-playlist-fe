import React, { Component } from 'react';
import './App.css';
import SongController from '../SongController/SongController';
import { getSongs } from '../helpers/apiCalls'
import Songs from '../Songs/Songs'
// import SongCard from '../components/SongCard'

class App extends Component {
  constructor() {
    super();
    this.state = {
      songQueue: [],
      error: ''
    }
  }

  componentDidMount() {
    getSongs()
      .then(songs => this.setState({ songQueue: songs }))
      .catch(error => this.setState({ error: "Ya done MESSED UP AY-AY-RON" }))
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Turing Playlist</h1>
        </header>
        <div className="App-background">
          <main>
            <Songs songs={this.state.songQueue}/>
            <SongController />
          </main>
        </div>
      </div>
    )
  }
}

export default App;
