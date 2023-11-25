import { useState } from "react";
import { Home, Login, Register } from "./Pages";
import { Route, Routes as Router } from "react-router-dom";
import { Header } from "./Components";
function App() {
  return (
    <>
      <Header />
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Router>
    </>
  );
}

export default App;
