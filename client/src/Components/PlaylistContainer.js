import React, {useState, useEffect} from 'react';
import '../App.css';
import Songs from './Songs'
import Faves from './Faves'

function PlaylistContainer() {
    const [songs, setSongs] = useState([])
    const [fave, setFaves] = useState([])

    useEffect(() => {
      const makeAPICall = async () => {
        try {
          const response = await axios(`${apiUrl}/songs`)
          setSongs(response.data)
        } catch (err) {
          console.error(err)
        }
      }
      makeAPICall()
    }, [])

    useEffect(() => {
        const makeAPICall = async () => {
          try {
            const response = await axios(`${apiUrl}/fav`)
            setFaves(response.data)
          } catch (err) {
            console.error(err)
          }
        }
        makeAPICall()
      }, [])

  return (
    <div className="playlist-container">
        <h1>Playlist</h1>
        <Songs songs={songs}/>
        <button>Add a Song</button>
        <h1>Favorites</h1>
        <Faves faves={faves}/>
        <Form />
    </div>
  );
}

export default PlaylistContainer;