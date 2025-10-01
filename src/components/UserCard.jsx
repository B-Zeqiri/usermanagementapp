import React from 'react';
import '../styles/UserCard.css';

const UserCard = ({ user }) => {
  return (
    <div className='userCard'>
      <h2>{user.name}</h2>
      <div className='userInfo'>
        <div className='userEmail'>
          <h3>Email</h3>
          <p>{user.email}</p>
        </div>
        <br></br>
        <div className='companyInfo'>
          <h3>Company</h3>
          <p>{user.company?.name}</p>
        </div>
      </div>  
    </div>
  )
}

export default UserCard