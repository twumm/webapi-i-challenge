import React from 'react'

export default function User({ name, bio }) {
  return (
    <div>
      <h4>{name}</h4>
      <h5>{bio}</h5>
    </div>
  )
}
