import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Users from './components/Users/Users';
import './App.css';

const usersURL = 'http://localhost:5000/api/users';

function App() {
  const [ users, setUsers ] = useState([]);
  const [ error, setError ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  const getAllUsers = async () => {
    setIsLoading(true);
    try {
      const users = await axios.get(usersURL);
      setUsers(users.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }

  const addUser = async (user) => {
    setIsLoading(true);
    try {
      await axios.post(usersURL, user);
      getAllUsers();
    } catch (error) {
      setError('Error, please try again');
    } finally {
      setIsLoading(false);
    }
  }

  const deleteUser = async (id) => {
    console.log(id)
    setIsLoading(true);
    try {
      await axios.delete(`${usersURL}/${id}`);
      getAllUsers();
    } catch (error) {
      setError('Error, please try again');
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getAllUsers()
  }, [])

  return (
    <div className="App">
      <Users
        users={users}
        addUser={addUser}
        error={error}
        isLoading={isLoading}
        deleteUser={deleteUser}
      />
    </div>
  );
}

export default App;
