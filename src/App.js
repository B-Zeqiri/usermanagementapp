import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import AddUser from "./pages/AddUser";
import UserDetails from "./pages/UserDetails";
import EditUser from "./pages/EditUser";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/users/:id" element={<UserDetails/>}/>
        <Route path="/edit-user/:id" element={<EditUser/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;