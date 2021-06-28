import React from "react";
import '../styles.css';
import logo from '../images/logo.png';
import hover_logo from '../images/logo_hover.png';
import AuthDropdown from './AuthDropdown';
import AuthNav from './AuthNav';
import { useHistory } from "react-router";


const NavBar = props => {

  const history = useHistory();
  const changePath = (new_path) => {
    let path = new_path;
    history.push(path)
  }


    return (
      <div>
        {/* {console.log('logged_in:', props.auth)} */}
        {/* {console.log('token: ', props.token)} */}
        <header className="Home-Header">
          <div className="logo">
            <img src={logo} alt="This is the web logo" style={{ marginLeft: '30px' }}></img>
            <img className="img-top" src={hover_logo} alt="This is the web logo" style={{ marginLeft: '30px' }} onClick={() => changePath("/Home")}></img>
          </div>
          <AuthNav auth={props.auth} user_token={props.token}/>
          <AuthDropdown auth={props.auth} user_token={props.token} changeAuth={props.changeAuth} />
        </header>
        {/* <div className="Home-Body">This is a test</div> */}
      </div>
    )
}

export default NavBar;