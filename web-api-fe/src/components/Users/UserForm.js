import React from 'react'

export default function UserForm({ addUser }) {
  let nameText = React.createRef();
  let bioText = React.createRef();

  const onAddUser = (event, nameText) => {
    event.preventDefault();
    const user = {
      name: nameText.current.value,
      bio: bioText.current.value
    }
    addUser(user);
  }
  
  return (
    <form onSubmit={event => onAddUser(event, nameText)}>
      <input
        type="text"
        placeholder="name"
        ref={nameText}
      />
      <input
        type="text"
        placeholder="bio"
        ref={bioText}
      />
      <input type="submit" />
    </form>
  )
}
