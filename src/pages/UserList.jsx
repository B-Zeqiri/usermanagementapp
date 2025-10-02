import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import UserCard from "../components/UserCard";
import "../styles/UserList.css";

const UserList = () => {
  const { users } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const filteredUsers = users.filter(user => user.name.toLowerCase().includes(search.toLowerCase()) ||
                        user.email.toLowerCase().includes(search.toLowerCase()));

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    if(sortOrder === "asc"){
      return a.name.localeCompare(b.name);
    } 
    else{
      return b.name.localeCompare(a.name);
    }
  });

  return (
    <div>
      <div className="headerUserList">
        <h1>User List</h1>
        <input type="text" placeholder="search" value={search}
               onChange={e => setSearch(e.target.value)}
        />
        <button onClick={()=> setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
           Sort:{sortOrder === "asc" ? "A-Z" : "Z-A"}
        </button>
      </div>
      {sortedUsers.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;