import React, { createContext, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response.data); // Log the fetched users
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, []);

  return (
    <UserContext.Provider value={{}}>
      {children}
    </UserContext.Provider>
  );
};