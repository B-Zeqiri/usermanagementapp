import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';

const EditUser = () => {
    const {id} = useParams();
    const {users, updateUser} = useContext(UserContext);
    const navigate = useNavigate();

    const user = users.find(u=>u.id === parseInt(id));

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

    useEffect(()=>{
        if(user){
            setName(user.name || '');
                  setEmail(user.email || '');
      setUsername(user.username || '');
      setStreet(user.address?.street || '');
      setSuite(user.address?.suite || '');
      setCity(user.address?.city || '');
      setZipcode(user.address?.zipcode || '');
      setLat(user.address?.geo?.lat || '');
      setLng(user.address?.geo?.lng || '');
      setPhone(user.phone || '');
      setWebsite(user.website || '');
      setCompanyName(user.company?.name || '');
      setCatchPhrase(user.company?.catchPhrase || '');
      setBs(user.company?.bs || '');
        }
    }, [user]);

    if(!user){
        return <div>User not found</div>;
    }

    const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Name and Email are required!");
      return;
    }
    updateUser({
      ...user,
      name,
      email,
      username,
      address: {
        street,
        suite,
        city,
        zipcode,
        geo: { lat, lng }
      },
      phone,
      website,
      company: {
        name: companyName,
        catchPhrase,
        bs
      }
    });
    navigate('/');
}

  return (
    <div>
      <h1>Edit User</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name: </label>
          <input value={name} onChange={e => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email: </label>
          <input value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Username: </label>
          <input value={username} onChange={e => setUsername(e.target.value)} />
        </div>
        <div>
          <label>Street: </label>
          <input value={street} onChange={e => setStreet(e.target.value)} />
        </div>
        <div>
          <label>Suite: </label>
          <input value={suite} onChange={e => setSuite(e.target.value)} />
        </div>
        <div>
          <label>City: </label>
          <input value={city} onChange={e => setCity(e.target.value)} />
        </div>
        <div>
          <label>Zipcode: </label>
          <input value={zipcode} onChange={e => setZipcode(e.target.value)} />
        </div>
        <div>
          <label>Latitude: </label>
          <input value={lat} onChange={e => setLat(e.target.value)} />
        </div>
        <div>
          <label>Longitude: </label>
          <input value={lng} onChange={e => setLng(e.target.value)} />
        </div>
        <div>
          <label>Phone: </label>
          <input value={phone} onChange={e => setPhone(e.target.value)} />
        </div>
        <div>
          <label>Website: </label>
          <input value={website} onChange={e => setWebsite(e.target.value)} />
        </div>
        <div>
          <label>Company Name: </label>
          <input value={companyName} onChange={e => setCompanyName(e.target.value)} />
        </div>
        <div>
          <label>Catch Phrase: </label>
          <input value={catchPhrase} onChange={e => setCatchPhrase(e.target.value)} />
        </div>
        <div>
          <label>BS: </label>
          <input value={bs} onChange={e => setBs(e.target.value)} />
        </div>
        <button type="submit">Update User</button>
      </form>
    </div>
  );
};

export default EditUser;