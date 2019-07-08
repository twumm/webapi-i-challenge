import React from 'react';

import User from './User'
import UserForm from './UserForm';

export default function Users({ users, addUser, error, isLoading, deleteUser }) {
  return (
    <div>
      { error && <p>{error}</p>}
      { isLoading && <p>Loading</p>}
      {
        users.map(user => <User key={user.id} id={user.id} name={user.name} bio={user.bio} deleteUser={deleteUser} />)
      }
      <UserForm addUser={addUser} />
    </div>
  )
}
