import React from "react";
import { useHistory } from 'react-router-dom';


const AuthNav = props => {
    const history = useHistory();

    const changePath = (new_path) => {
        let path = new_path;
        history.push(path)
    }

    if (props.auth) {
        return (
            <nav>
                <ul className="nav__links">
                    <li><span onClick={() => changePath("/Rankings")}>Rankings</span></li>
                    <li><span onClick={() => changePath("/Search")}>Search</span></li>
                    <li><span onClick={() => changePath("/Factors")}>Factors</span></li>
                </ul>
            </nav>
        )
    } else {
        return (
            <nav>
                <ul className="nav__links">
                    <li><span onClick={() => changePath("/Rankings")}>Rankings</span></li>
                    <li><span onClick={() => changePath("/Search")}>Search</span></li>
                </ul>
            </nav>
        )
    }
};

export default AuthNav;