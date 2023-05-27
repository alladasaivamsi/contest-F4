import React, { useState, useEffect } from "react";
import "./profile.css";
import SignUp from "./signUp";

const Profile = () => {
  return (
    <>
      <ProfileMain />
    </>
  );
};

// const getLocalItems = () => {
//   let list = localStorage.getItem("data");
//   console.log(list);
//   if (list) {
//     return JSON.parse(localStorage.getItem("data"));
//   } else {
//     return [];
//   }
// };

const ProfileMain = () => {
  let data = JSON.parse(localStorage.getItem("data"));
  // const [data, setData] = useState("");
  const name = data.map((e) => e.name);
  const email = data.map((e) => e.email);
  const password = data.map((e) => e.password);
  // const [items, setItems] = useState(getLocalItems());

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem("data");
    // Redirect to signup page
    window.href = "./signUp.js";
  };

  return (
    <div className="container">
      <h1>Profile</h1>
      <div className="profileData">
        <p>Full Name : {name}</p>
        <p>Email : {email}</p>
        <p>Password : {password}</p>
      </div>
      <button className="logOutBtn" onClick={(e) => handleLogout()}>
        Logout
      </button>
    </div>
  );
};

export default Profile;
