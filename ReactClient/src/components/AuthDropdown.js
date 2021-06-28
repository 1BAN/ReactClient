import React from "react";
import { useHistory } from 'react-router-dom';

const AuthDropdown = props => {
    const history = useHistory();

    const changePath = (new_path) => {
        let path = new_path;
        history.push(path)

        if (path === "/Logout") {
            props.changeAuth(false, null)
            history.push("/Home")
        }

        // else if (path === "/Login") {
        //     props.changeAuth(true, null) // To Do: This should be removed once the login page has a form that communicates with the API
        // }
    }


    if (props.auth) {
        return (
            <div className="dropdown">
                <button className="dropdown-auth" style={{marginRight: "30px"}} onClick={() => changePath("/Logout")}>Logout</button>
                {/* <button className="dropdown-auth" style={{marginRight: "30px"}} onClick={() => props.changeAuth(false, null)}>Logout</button> */}
            </div>
        )
    }
    return (
        <div className="dropdown">
            <button className="dropdown-auth" style={{marginRight: "30px"}}>Authenticate</button>
            <div className="dropdown-content">
                <button onClick={() => changePath("/Register")}>Register</button>
                <button onClick={() => changePath("/Login")}>Login</button>
            </div>
        </div>
    )
};

export default AuthDropdown;
