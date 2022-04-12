import React, { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import MyContext from "../context/MyContext";




const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    const context = useContext(MyContext)

    const login = (event) => {
        event.preventDefault();
        axios
            .post(
                "http://localhost:8000/api/users/login",
                {
                    email: email,
                    password: password,
                },
                {
                    withCredentials: true,
                }
            )
            .then((res) => {
                console.log(res, "res");
                console.log(res.data, "is res data!");
                context.loggedIn = true
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrorMessage(err.response.data.message);
            });
    };

    return (
        <Container>
            <Typography variant="h3" sx={{ marginBottom: 3, marginTop: 5 }}>
                Login
            </Typography>
            <Typography color="error" sx={{ marginBottom: 3}}>
                {errorMessage ? errorMessage : ""}
            </Typography>
            <form onSubmit={login}>
                <div>
                    {/* <label>Email</label> */}
                    <TextField
                        type="text"
                        name="email"
                        value={email}
                        variant="outlined"
                        label="Email"
                        required
                        margin="normal"
                        // sx={{ marginBottom: 3 }}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    {/* <label>Password</label> */}
                    <TextField
                        type="password"
                        name="password"
                        value={password}
                        variant="outlined"
                        label="Password"
                        required
                        margin="normal"
                        // sx={{ marginBottom: 3 }}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div className="center">
                    <Button type="Submit" variant="contained" sx={{marginTop:3}}>
                        Sign In
                    </Button>
                </div>
            </form>
            <Typography sx={{ marginTop: 3 }}>
                <Link to={"/register"}>Don't have an account? Sign up</Link>
            </Typography>
        </Container>
    );
};

export default Login;
