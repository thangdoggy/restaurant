import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header, Footer } from "./components";
import { Home, Login, Register } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>

      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
