import React from 'react'

export default function User({ id, name, bio, deleteUser }) {
  const onDeleteUser = (id) => {
    deleteUser(id);
  }

  return (
    <div>
      <h4>{name}</h4>
      <h5>{bio}</h5>
      <p
        style={{ cursor: 'pointer', color: 'red' }}
        onClick={event => onDeleteUser(id, event)}
      >
        X
      </p>
    </div>
  )
}
