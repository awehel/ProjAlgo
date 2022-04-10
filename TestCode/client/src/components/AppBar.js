import React, {useState, useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import MyContext from "../context/MyContext";


const AppBar = (props) =>{

    const navigate = useNavigate();

    console.log(props);

    const context = useContext(MyContext)

    const logout = (e) => {
        axios
            .post(
                "http://localhost:8000/api/users/logout",
                {}, // As a post request, we MUST send something with our request.
                // Because we're not adding anything, we can send a simple MT object
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log(res);
                console.log(res.data);
                context.loggedIn = false
                navigate("/");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-dark mb-3">
            <div className="container w-50 mx-auto">
                <h2 className="text-light">Show Tracker</h2>
                <div className="collapse navbar-collapse mx-3">
                    <Link to={`/login`}><p>Login</p></Link>
                    <button className="btn btn-warning" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    ); 

}

export default AppBar