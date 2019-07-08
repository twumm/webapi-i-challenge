import React from 'react';

import User from './User'
import UserForm from './UserForm';

export default function Users({ users, addUser, error, isLoading }) {
  return (
    <div>
      { error && <p>{error}</p>}
      { isLoading && <p>Loading</p>}
      {
        users.map(user => <User key={user.id} name={user.name} bio={user.bio} />)
      }
      <UserForm addUser={addUser} />
    </div>
  )
}
