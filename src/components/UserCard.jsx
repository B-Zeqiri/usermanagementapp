import React, { useContext } from 'react';
import '../styles/UserCard.css';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { Tooltip } from '@mui/material';

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
  <div className='cardContainer'>
    <Tooltip 
        title={`View ${user.name}'s Details`}
  arrow
  componentsProps={{
    tooltip: {
      sx: {
        bgcolor: '#2f4b67ff',
        color: 'white',
        borderRadius: '16px',
        fontSize: 14,
        fontWeight: 'light',
        boxShadow: 3,
        padding: '5px 10px',
      }
    },
    arrow: {
      sx: {
        color: '#1976d2',
      }
    }
  }}
    >
  <Link className='link' to={`/users/${user.id}`}>
    <div className='userCard'>
      <h2>{user.name}</h2>
      <div className='userInfo'>
        <div className='userEmail'>
          <MailOutlineIcon style={{fontSize: 40}}/>
          <p>{user.email}</p>
        </div>
        <br></br>
        <div className='companyInfo'>
          <h4>Company:</h4>
          <p>{user.company?.name}</p>
        </div>
      </div>  
    </div>
  </Link>
  </Tooltip>
  <div className='userHeader'>
    <button className='editButon' onClick={handleEdit}>Edit</button>
    <button className='deleteButton' onClick={handleDelete}>Delete</button>
  </div>
  </div>
  )
}

export default UserCard