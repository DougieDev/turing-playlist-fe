import React, { Component } from 'react';
import './Form.css'

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      songName: '',
      artistName: '',
      link: ''
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  submitForm = (e) => {
    e.preventDefault()
    const newSong = {
      songName: this.state.songName,
      artistName: this.state.artistName,
      link: this.state.link,
      id: Date.now()
    }

    this.props.addNewSong(newSong)
    this.clearFormInputs()
  }

  clearFormInputs = () => {
    this.setState({
      songName: '',
      artistName: '',
      link: ''
    })
  }

  render() {
    return (
      <div className='form-container'>
        <form>
          <input name='songName' onChange={this.handleChange} value={this.state.songName} placeholder='Song Name' />
          <input name='artistName' onChange={this.handleChange} value={this.state.artistName} placeholder='Artist Name' />
          <input name='link' onChange={this.handleChange} value={this.state.link} placeholder='Link' />
          <button onClick={this.submitForm}>Add Song!</button>
        </form>
      </div>
    )
  }
}

export default Form;
