import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import "../styles/EditUser.css";

const EditUser = () => {
  const { id } = useParams();
  const { users, updateUser } = useContext(UserContext);
  const navigate = useNavigate();

  const user = users.find((u) => u.id === parseInt(id));

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

  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setEmail(user.email || "");
      setUsername(user.username || "");
      setStreet(user.address?.street || "");
      setSuite(user.address?.suite || "");
      setCity(user.address?.city || "");
      setZipcode(user.address?.zipcode || "");
      setLat(user.address?.geo?.lat || "");
      setLng(user.address?.geo?.lng || "");
      setPhone(user.phone || "");
      setWebsite(user.website || "");
      setCompanyName(user.company?.name || "");
      setCatchPhrase(user.company?.catchPhrase || "");
      setBs(user.company?.bs || "");
    }
  }, [user]);

  if (!user) {
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
        geo: { lat, lng },
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
    <div className="editUserWrapper">
      <h1>Edit User</h1>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div className="userAddressInformation2">
          <div className="usersInfo">
            <h3>User's Information</h3>
            <div className="name2 one">
              <label>Name: </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="email2 one">
              <label>Email: </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="username2 one">
              <label>Username: </label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="phone2 one">
              <label>Phone: </label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="website2 one">
              <label>Website: </label>
              <input
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>
          </div>
          <div className="adressInfo">
            <h3>Address:</h3>
            <div className="street2 one">
              <label>Street: </label>
              <input
                value={street}
                onChange={(e) => setStreet(e.target.value)}
              />
            </div>
            <div className="suite2 one">
              <label>Suite: </label>
              <input value={suite} onChange={(e) => setSuite(e.target.value)} />
            </div>
            <div className="city2 one">
              <label>City: </label>
              <input value={city} onChange={(e) => setCity(e.target.value)} />
            </div>
            <div className="zipcode2 one">
              <label>Zipcode: </label>
              <input
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="goeCompanyInformation2">
          <div className="geoInformation">
            <h3>Geo</h3>
            <div className="latitude2 one">
              <label>Latitude: </label>
              <input value={lat} onChange={(e) => setLat(e.target.value)} />
            </div>
            <div className="longitude2 one">
              <label>Longitude: </label>
              <input value={lng} onChange={(e) => setLng(e.target.value)} />
            </div>
          </div>
          <div className="companyInfo2">
            <h3>Company's Information</h3>
            <div className="companyName2 one">
              <label>Company Name: </label>
              <input
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>
            <div className="catchPhrase2 one">
              <label>Catch Phrase: </label>
              <input
                value={catchPhrase}
                onChange={(e) => setCatchPhrase(e.target.value)}
              />
            </div>
            <div className="bs2 one">
              <label>BS: </label>
              <input value={bs} onChange={(e) => setBs(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="buttonDiv">
          <button
            className="cacelButton2"
            type="button"
            onClick={() => navigate("/")}
          >
            Cancel
          </button>
          <button className="updateButton2" type="submit">
            Update User
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
