import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import UserCard from "../components/UserCard";
import "../styles/UserList.css";

const UserList = () => {
  const { users } = useContext(UserContext);
  const [search, setSearch] = useState("");

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) ||
                        user.email.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <div className="headerUserList">
        <h1>User List</h1>
        <input type="text" placeholder="search" value={search}
               onChange={e => setSearch(e.target.value)}
      />
      </div>
      {filteredUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;