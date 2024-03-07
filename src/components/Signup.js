import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import "./login.css"

const Signup = () => {
  const [credential, setCredential] = useState({name: "", email: "", password: "", cpassword: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const {name, email, password} = credential;
    const response = await fetch("http://localhost:5000/api/auth/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name, email, password
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authtoken);
      toast.success("Signup Successfully")
      navigate("/");
    } else {
     toast.error("Invalid Credentials Danger")
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };
  return (
    <div className="maincontainersign">
      <div className="form">

      <h1 className="my-3 container">Create account</h1>
      <p className="container">Save your notes in iNotebook</p>
      <form className="container" onSubmit={handleSubmit}>
        <div className="mb-3">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input name="name"
              type="text"
              className="form-control input"
              id="name"
              aria-describedby="name"
              onChange={onChange} minLength={3} required autoComplete="off"
            />
          </div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input name="email"
            type="email"
            className="form-control input"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={onChange} required autoComplete="off"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control input"
            name="password"
            id="password"
            onChange={onChange} minLength={5} required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control input"
            id="cpassword"
            name="cpassword"
            onChange={onChange} minLength={5} required
          />
        </div>
        <button type="submit" className="btn btn-primary submitbtn">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default Signup;
