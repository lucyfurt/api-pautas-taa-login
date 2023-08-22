import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../component/dataTables.css'

function App() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
     
      const response = await axios.get('http://localhost:3007/api/v1/users/');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const deleteUser = async userId => {
    try {
      console.log('Deleting user with ID:', userId);
      
      const response = await axios.delete(`http://localhost:3007/api/v1/users/${userId}`);
      console.log('Response:', response);
  
      if (response.status === 200) {
        fetchUsers(); // Refresh the user list after deletion
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };
  

  return (
    <div className="App">
      <h1>Shows/Espetáculos</h1>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Lastname</th>
            <th>Email</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user._id}>
              <td>{user.username}</td>
              <td>{user.lastname}</td>
              <td>{user.email}</td>
              <td>
                <button onClick={() => deleteUser(user._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
