import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import "../styles/UserDetails.css";

const UserDetails = () => {
  const { id } = useParams();
  const { users } = useContext(UserContext);
  const user = users.find((u) => u.id === parseInt(id));

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div className="userDetailsWrapper">
      <h2>User's Details</h2>
      <div className="centeredDiv">
        <h1>{user.name}</h1>
        <div className="usersInformation3">
          <p>
            Address:<br></br>
            {[
              user.address.street,
              user.address.suite,
              user.address.city,
              user.address.zipcode,
            ]
              .filter(Boolean)
              .join(",")}
          </p>
          <p>
            Phone:<br></br> {user.phone}
          </p>
          <p>
            Website:<br></br>
            {user.website}
          </p>
        </div>
        <div className="linkContainer">
          <Link className="userDetailsLink" to="/">
            {" "}
            Back to User List
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
