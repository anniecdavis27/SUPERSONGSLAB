import React, {useState, useEffect} from 'react';
import '../App.css';
import apiUrl from '../apiConfig'
import axios from 'axios'
import Songs from './Songs'
// import Faves from './Faves'

function PlaylistContainer() {
    const [songs, setSongs] = useState([])
    const [fave, setFaves] = useState([])

console.log(apiUrl)

    useEffect(() => {
      const makeAPICall = async () => {
        try {
          const response = await axios(`${apiUrl}/songs`)
          setSongs(response.data)
          console.log(response.data)
        } catch (err) {
          console.error(err)
        }
      }
      makeAPICall()
    }, [])

    console.log(songs)

        if(!songs) {
        return <p>...loading</p>
    }

    let songList = songs.map(song => (
        <li key={song.id}>
            <h3>{song.title}</h3>
            <p>{song.time}</p>
            <p>{song.artist}</p>
            <button>Edit Song</button>
            <button>Remove Song</button>
            <button>Add to Favorites</button>

        </li>
    ))

    // useEffect(() => {
    //     const makeAPICall = async () => {
    //       try {
    //         const response = await axios(`${apiUrl}/fav`)
    //         setFaves(response.data)
    //       } catch (err) {
    //         console.error(err)
    //       }
    //     }
    //     makeAPICall()
    //   }, [])

  return (
    <div className="playlist-container">
        <h1>Playlist</h1>
        <ul>{songList}</ul>
        {/* <Songs songs={songs}/> */}
        <button>Add a Song</button>
        <h1>Favorites</h1>
        {/* <Faves faves={faves}/> */}
        {/* <Form /> */}
    </div>
  );
}

export default PlaylistContainer;