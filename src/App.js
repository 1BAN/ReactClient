import React, { useState } from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import Register from "./pages/Register";
import Login from "./pages/Login";
import Rankings from "./pages/nav_pages/Rankings";
import Search from "./pages/nav_pages/Search";
import Factors from "./pages/nav_pages/Factors";

function App() {

  const [auth, setAuth] = useState({
    logged_in: false,
    token: null,
  })

  const onChangeAuth = (auth_status, new_token) => {
    setAuth({
      logged_in: auth_status,
      token: new_token,
    })
  }

    return (
    <Router>
      <NavBar auth={auth.logged_in} token={auth.token} changeAuth={onChangeAuth}/>
      
      <Switch>
        <Route path="/Home">
          <Home/>
        </Route>
        <Route path="/Register">
          <Register/>
        </Route>
        <Route path="/Login">
          <Login token={auth.token} changeAuth={onChangeAuth}/>
        </Route>
        <Route path="/Rankings">
          <Rankings/>
        </Route>
        <Route path="/Search">
          <Search/>
        </Route>
        <Route path="/Factors">
          <Factors token={auth.token} auth={auth.logged_in} changeAuth={onChangeAuth}/>
        </Route>
      </Switch>
      <Route path="/">
          <Redirect to="/Home"/>
        </Route>
    </Router>
  );
}



export default App;
