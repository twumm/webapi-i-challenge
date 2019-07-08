import React from 'react';

import User from './User'

export default function Users({ users }) {
  return (
    <div>
      {
        users.map(user => <User key={user.id} name={user.name} bio={user.bio} />)
      }
    </div>
  )
}
