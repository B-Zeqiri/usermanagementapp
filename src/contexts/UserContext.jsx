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

  return (
    <UserContext.Provider value={{users}}>
      {children}
    </UserContext.Provider>
  );
};