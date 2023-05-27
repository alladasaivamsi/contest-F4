import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignUp from "./components/signUp";
import Profile from "./components/profile";
import Navbar from "./Navbar.js";

function App() {
  let Component;
  switch (window.location.pathname) {
    case "/":
      Component = <SignUp />;
      break;
    case "/signUp":
      Component = <SignUp />;
      break;
    case "/profile":
      Component = <Profile />;
      break;
  }
  return (
    <>
      <Navbar />

      {Component}
    </>
  );
}

export default App;
