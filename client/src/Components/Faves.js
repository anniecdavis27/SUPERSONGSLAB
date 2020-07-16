import React from 'react';
import '../App.css';

function Faves({ faves }) {

    if(!faves) {
        return <p>You have no favorites yet!</p>
    }
    let favesList = faves.map(song => {
        <div key={song.id}>
            <h3>{song.title}</h3>
            <p>{song.time}</p>
            <p>{song.artist}</p>
            <button>Edit Song</button>
            <button>Remove from Favorites</button>

        </div>
    })

  return (
    <div className="songs">
        {favesList}
    </div>
  );
}

export default Faves;