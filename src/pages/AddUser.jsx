import React, { useContext, useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const {addUser} = useContext(UserContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [street, setStreet] = useState('');
  const [suite, setSuite] = useState('');
  const [city, setCity] = useState('');
  const [zipcode, setZipcode] = useState('');
  const [lat, setLat] = useState('');
  const [lng, setLng] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  const [bs, setBs] = useState('');


  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()){
      setError("Name and Email are required!");
      return;
    }
    addUser({
    name,
    username,
    email,
    address: {
      street, 
      suite, 
      city, 
      zipcode
    },
    geo:{
      lat,
      lng
    },
    phone,
    website,
    company: {
      name: companyName,
      catchPhrase,
      bs
    },
  });
  navigate("/");
  };

  return (
    <div>
      <h1>Add New User</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input value={name} onChange={e=>setName(e.target.value)} required/>
        </div>
        <div>
          <label>Username: </label>
          <input value={username} onChange={e=>setUsername(e.target.value)}/>
        </div>
        <div>
          <label>Email:</label>
          <input value={email} onChange={e=>setEmail(e.target.value)} required/>
        </div>
        <div>
          <h3>Address:</h3>
          <label>Street:</label>
          <input value={street} onChange={e=>setStreet(e.target.value)} />
          <label>Suite:</label>
          <input value={suite} onChange={e=>setSuite(e.target.value)} />
          <label>City:</label>
          <input value={city} onChange={e=>setCity(e.target.value)} />
          <label>Zipcode:</label>
          <input value={zipcode} onChange={e=>setZipcode(e.target.value)} />
        </div>
         <div>
          <h3>Geo</h3>
          <label>Lat:</label>
          <input value={lat} onChange={e=>setLat(e.target.value)}/>
          <label>Lng:</label>
          <input value={lng} onChange={e=>setLng(e.target.value)}/>
        </div>
        <div>
          <label>Phone:</label>
          <input value={phone} onChange={e=>setPhone(e.target.value)}/>
        </div>
        <div>
          <label>Website:</label>
          <input value={website} onChange={e=>setWebsite(e.target.value)}/>
        </div>
         <div>
          <h3>Company</h3>
          <label>Name:</label>
          <input value={companyName} onChange={e=>setCompanyName(e.target.value)}/>
          <label>CatchPhrase:</label>
          <input value={catchPhrase} onChange={e=>setCatchPhrase(e.target.value)}/>
          <label>Bs:</label>
          <input value={bs} onChange={e=>setBs(e.target.value)}/>
        </div>
        <button type='submit'>Add User</button>
        <button onClick={()=>navigate('/')}>Cancel</button>
      </form>
    </div>
  )
}

export default AddUser