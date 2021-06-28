import React, { useState } from "react";
import '../styles.css'

const API_URL = "http://131.181.190.87:3000";

function Register() {

  const [register, setResult] = useState({result: ""})

  function registerUser() {
    const url = `${API_URL}/user/register`

    return fetch(url, {
      method: "POST",
      headers: { accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({email: username.name, password: password.word})
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.message === "User created") {
        setResult({result: "success"})
      } else {
        setResult({result: "failure"})
      }
    })
  }

  const [username, setUser] = useState({name: ''})
  const [password, setPass] = useState({word: ''})

  const handleSubmit = e => {
    e.preventDefault();
    registerUser();
  }

  return (
    <div className="Home-Body">
        <form className="Auth-Form" onSubmit={handleSubmit}>
          <span className="Auth-Form-Labels">Register</span>
          {register.result === "success" ? (
            <span className="Register-Successful">User successfully registered</span>
          ): null}
          {register.result === "failure" ? (
            <span className="Register-Unsuccessful">User already exists</span>
          ): null}
          <input className="Auth-Input" type="text" name="username" placeholder="Email" required value={username.name} onChange={e => setUser({name: e.target.value})}></input>
          <input className="Auth-Input" type="password" name="password" placeholder="Password" required value={password.word} onChange={e => setPass({word: e.target.value})}></input>
          <button className="Auth-Form-Button">Register</button>
        </form>
    </div>
  );
}

export default Register;
    