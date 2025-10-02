import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import AddUser from "./pages/AddUser";
import UserDetails from "./pages/UserDetails";




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
        <Route path="/users/:id" element={<UserDetails/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;