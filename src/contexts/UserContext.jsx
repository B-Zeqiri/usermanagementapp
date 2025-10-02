import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);

  const addUser = (user) => {
    setUsers(prev => [{...user, id: Date.now()}, ...prev]);
  };

  const updateUser = (updateUser) =>{
    setUsers(prev => prev.map(user => user.id === updateUser.id ? updateUser : user));
  };

  const deleteUser = (id)=>{
    setUsers(prev => prev.filter(user=>user.id !== id));
  }

  return (
    <UserContext.Provider value={{users, addUser, updateUser, deleteUser}}>
      {children}
    </UserContext.Provider>
  );
};