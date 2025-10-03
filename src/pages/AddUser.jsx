import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import "../styles/AddUser.css";

const AddUser = () => {

  const { addUser } = useContext(UserContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [bs, setBs] = useState("");

  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
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
        zipcode,
      },
      geo: {
        lat,
        lng,
      },
      phone,
      website,
      company: {
        name: companyName,
        catchPhrase,
        bs,
      },
    });
    navigate("/");
  };

  return (
    <div className="addUserContainer">
      <h1>Add New User</h1>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="personalAddressWrapper">
          <div className="personalInfo">
            <h3>User's Information</h3>
            <input
              placeholder="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <input
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              placeholder="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <input
              placeholder="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>
          <div className="addressInfo">
            <h3>Address:</h3>
            <input
              placeholder="street"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            <input
              placeholder="suite"
              value={suite}
              onChange={(e) => setSuite(e.target.value)}
            />
            <input
              placeholder="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              placeholder="zipcode"
              value={zipcode}
              onChange={(e) => setZipcode(e.target.value)}
            />
          </div>
        </div>
        <div className="geoCompanyWrapper">
          <div className="geoInfo">
            <h3>Geo</h3>
            <input
              placeholder="lat"
              value={lat}
              onChange={(e) => setLat(e.target.value)}
            />
            <input
              placeholder="lng"
              value={lng}
              onChange={(e) => setLng(e.target.value)}
            />
          </div>

          <div className="companyInfoDiv">
            <h3>Company</h3>
            <input
              placeholder="name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              placeholder="catch phrase"
              value={catchPhrase}
              onChange={(e) => setCatchPhrase(e.target.value)}
            />
            <input
              placeholder="bs"
              value={bs}
              onChange={(e) => setBs(e.target.value)}
            />
          </div>
        </div>
        <div className="formButtons">
          <button type="button" className="cancelButton" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button className="submitButton" type="submit">
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
