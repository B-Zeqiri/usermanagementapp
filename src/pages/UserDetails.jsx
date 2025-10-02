import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';

const UserDetails = () => {
  const {id} = useParams();
  const {users} = useContext(UserContext);
  const user = users.find(u => u.id === parseInt(id));

  if (!user){
    return<div>User not found.</div>
  }


  return (
    <div>
      <Link to="/">Back to User List</Link>
      <h1>{user.name}</h1>
      <p>Address:{
        [user.address.street, user.address.suite, user.address.city, user.address.zipcode].filter(Boolean).join(',')}
      </p>
      <p>Phone: {user.phone}</p>
      <p>Website:{user.website}</p>
    </div>
  )
}

export default UserDetails