import React, { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./Routes/Navigation.jsx";
import Api from "./Api.jsx"
import Form from "./Form.jsx"

function App() {

  return (
    <>
    <Navigation />
      <Routes>
      <Route path="/Form" element={<Form />} />
        <Route path="/" element={""} />
        <Route path="/Api" element={<Api />} />
      </Routes>

    </>
  );
}

export default App;
