import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import AddUser from "./pages/AddUser";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/add-user" element={<AddUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;