import React, { useState } from "react";
import { useHistory } from "react-router";

const API_URL = "http://131.181.190.87:3000";

const Login = props => {

  const [logUser, setLogUser] = useState()
  const history = useHistory();

  function loginUser() {
    const url = `${API_URL}/user/login`

    return fetch(url, {
      method: "POST",
      headers: { accept: "application/json", "Content-Type": "application/json"},
      body: JSON.stringify({email: username.name, password: password.word})
    })
    .then((res) => res.json())
    .then((res) => {
      if (res.message) {
        setLogUser(res.message);
      } 
      else if (res.token !== undefined) {
        props.changeAuth(true, res.token)
        history.push("/Home")
      }
    })
  }

  const [username, setUser] = useState({name: ''})
  const [password, setPass] = useState({word: ''})

  const handleSubmit = e => {
    e.preventDefault();
    loginUser();
  }

  return (
    <div>
      <div className="Home-Body">
      <form className="Auth-Form" onSubmit={handleSubmit}>
          <span className="Auth-Form-Labels">Login</span>
          {logUser ? (
            <span className="Register-Unsuccessful">{logUser}</span>
          ): null}
          <input className="Auth-Input" type="text" name="username" placeholder="Email" required value={username.name} onChange={e => setUser({name: e.target.value})}></input>
          <input className="Auth-Input" type="password" name="password" placeholder="Password" required value={password.word} onChange={e => setPass({word: e.target.value})}></input>          
          <button className="Auth-Form-Button">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;