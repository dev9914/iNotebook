import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {toast } from 'react-toastify';
import "./login.css"

const Login = () => {
    const [credential, setCredential] = useState({email: "", password:""});
    const navigate = useNavigate();

    const handleSubmit = async(e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login",{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credential.email, password: credential.password})
          });
          const json = await response.json()
          console.log(json)
          if(json.success){
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            toast.success("Successfully Login ")
            navigate("/");
          }
          else{
            toast.error("Invalid Email or Password");
          }  
        }

    const onChange = (e) => {
        setCredential({...credential, [e.target.name]: e.target.value });
      };
  return (
    <div className="maincontainer">
      <div className="form">

      <h1 className="container my-3">Login</h1>
      <p className="container">Save your notes in iNotebook</p>
      <form onSubmit={handleSubmit} className="container">
        <div className="mb-3 ">
          <label htmlFor="email1" className="form-label">
            Email address
          </label>
          <input value={credential.email}
            type="email" onChange={onChange}
            className="form-control input"
            id="email1" name="email"
            aria-describedby="emailHelp" autoComplete="off"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input value={credential.password} onChange={onChange}
            type="password"
            className="form-control input"
            id="password" name="password" minLength={5} required
          />
        </div>
        <button type="submit"  className="btn submitbtn">
          Submit
        </button>
      </form>
      </div>
    </div>
  );
};

export default Login;
