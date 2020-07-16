import React from 'react'

const CreateForm = ({ item, handleSubmit, handleChange }) => {
  
  return (
    <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
        placeholder='add a title'
        value={item.title}
        name="title"
        onChange={handleChange}
        />
        <br />
        <label>Artist</label>
        <input
        placeholder='add a link'
        value={item.artist}
        name="artist"
        onChange={handleChange}
        />
<br />
        <label>Time</label>
        <input
        placeholder='add a link'
        value={item.time}
        name="time"
        onChange={handleChange}
        />
<br />
<br />
        <button type="submit">Submit</button>
    </form>
    )
}

export default CreateForm