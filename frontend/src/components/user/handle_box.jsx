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
    <p>{handle}</p>
  )
}

export default HandleBox