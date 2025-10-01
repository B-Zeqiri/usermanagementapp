import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import UserCard from "../components/UserCard";

const UserList = () => {
  const { users } = useContext(UserContext);

  return (
    <div>
      <h1>User List</h1>
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;