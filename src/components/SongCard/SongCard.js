import React from 'react'

const SongCard = (props) => {
  return (
    <div className='song-card'>
      <h1 className='song-name'>{props.song}</h1>
      <h2 className='song-artist'>{props.artist}</h2>
      <a className='song-link'
      href={props.songLink}>Watch '{props.song}' now!'</a>
    </div>
  )
}

export default SongCard
