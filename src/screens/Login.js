import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [credentials, setCredentials] = useState({email: "", password: ""});
  let navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/login", {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        })
        const json = await response.json();
        console.log(json);

        if(!json.success){
            alert("Enter valid credentials")
        }

        if(json.success){
          localStorage.setItem("authToken", json.authToken)
          // console.log(localStorage.getItem("authToken"))
          navigate('/')
        }
    }

    const onChange = (event) => {
        setCredentials({...credentials, [event.target.name]: event.target.value})
    }
  return (
    <div>
      <div className="container mt-5">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name = 'email' value={credentials.email}
            onChange = {onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name = 'password' value={credentials.password}
            onChange = {onChange}
          />
        </div>
        <button type="submit" className="m-3 btn btn-primary">
          Login
        </button>
        <Link to='/createuser' className="m-3 btn btn-danger"> New user?</Link>

      </form>
    </div>
    </div>
  )
}
