import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Header } from "./components";
import { Home } from "./pages";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
