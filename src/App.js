import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import {
  Home,
  Login,
  Register,
  Menu,
  Reservation,
  Contact,
  About,
} from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
