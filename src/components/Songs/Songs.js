import React from 'react'
import './Songs.css';
import SongCard from '../SongCard/SongCard'

const Songs = (props) => {
  return(
    <div className='songs-container'>
      <section className='songs'>
        {props.songs.map(song => {
          return (
            <SongCard
              song={song.songName}
              artist={song.artistName}
              songLink={song.link}
            />
          )
        })}
      </section>
    </div>
  )
}

export default Songs
