import React, { useContext } from 'react';
import '../styles/UserCard.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';

const UserCard = ({ user }) => {
  const {deleteUser}=useContext(UserContext);
  const navigate = useNavigate();

  const handleDelete =(e)=>{
    deleteUser(user.id);
  };

  const handleEdit = () => {
  navigate(`/edit-user/${user.id}`);
};

  return (
  <div>
  <Link to={`/users/${user.id}`}>
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
  </Link>
  <div>
    <button onClick={handleEdit}>Edit</button>
    <button onClick={handleDelete}>Delete</button>
  </div>
  </div>
  )
}

export default UserCard