import React, { useState, useEffect } from 'react';

// Returns a users handle when given their id
const HandleBox = ({ id, fetchUser, users }) => {
  const [handle, setHandle] = useState('')
  useEffect(() => {
    users[id] ?
      setHandle(users[id]) :
      fetchUser(id).then(() => setHandle(users[id]))
  }, [])

  return (
    <p className='tweetbox__handle'>{handle}</p>
  )
}

export default HandleBox