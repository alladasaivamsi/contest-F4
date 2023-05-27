import React, { useState, useEffect } from "react";
import "./signUp.css";

const SignUp = () => {
  return (
    <>
      <SignUpMain />
    </>
  );
};

const getDataForm = () => {
  const getData = localStorage.getItem("data");
  if (getData) {
    return JSON.parse(getData);
  } else {
    return [];
  }
};

const SignUpMain = () => {
  const [data, setData] = useState(getDataForm());

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [errorField, setErrorField] = useState("");
  const [successField, setSuccessField] = useState("");

  const generateAccessToken = () => {
    return [...Array(16)]
      .map(() => Math.floor(Math.random() * 16).toString(16))
      .join("");
  };

  const handleFormData = (e) => {
    e.preventDefault();
    if (name && email && password && cPassword) {
      if (password === cPassword) {
        const accessToken = generateAccessToken();
        let storeData = {
          name,
          email,
          password,
          accessToken,
        };
        setData([...data, storeData]);
        setName("");
        setEmail("");
        setPassword("");
        setCPassword("");
      }
      setSuccessField("Successfully Signed Up!");
      setErrorField("");
    } else {
      setSuccessField("");
      setErrorField("Error : All the fields are mandatory");
    }
  };
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <div className="container">
      <h1>SignUp</h1>
      <form className="form-container" onSubmit={handleFormData}>
        <div className="fullname">
          <input
            type="name"
            placeholder="Full Name"
            className="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="email">
          <input
            type="email"
            placeholder="Email"
            className="emailInput"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="Password"
            className="passwordInput"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="confirmPassword">
          <input
            type="password"
            placeholder="Confirm Password"
            className="confirmPasswordInput"
            onChange={(e) => setCPassword(e.target.value)}
            value={cPassword}
          />
        </div>

        {errorField && <p className="errorField">{errorField}</p>}
        {successField && <p className="successField">{successField}</p>}

        <button type="submit" className="signUpBtn" onClick={handleFormData}>
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
