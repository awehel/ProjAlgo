import React, {useState, useContext, useRef, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MyContext from "../context/MyContext";
import { AppBar, Button } from "@mui/material";
import { Box } from "@mui/system";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { Link } from "@mui/material";
import { Avatar } from "@mui/material";
import { deepOrange, green } from "@mui/material/colors";
import LogoutIcon from "@mui/icons-material/Logout";


const NavBar = (props) =>{

    const navigate = useNavigate();

    const context = useContext(MyContext)

    const [user, setUser] = useState({})

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
                navigate("/login");
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(()=>{
        axios.get("http://localhost:8000/api/users",
            {withCredentials: true}
        )
        .then((res)=>{
            console.log(res.data)
            setUser(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])


    

    async function stringAvatar(name) {
        return {
            
            children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
        };
    }
    


    return (
        <Box sx={{ flexGrow: 1, alignItems: 'center' }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ display: { sm: "block" } }}
                    >
                        Shows
                    </Typography>
                    <Box sx={{flexGrow: 1}}>

                        <Link href="/search" underline="none" color="inherit">
                            Search for a TV Show <SearchIcon />
                        </Link>
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    {user.username? (
                        <Box sx={{ display: { xs: "none", md: "flex" } }}>
                            <Button
                                onClick={logout}
                                type="submit"
                                endIcon={<LogoutIcon/>}
                                color="secondary"
                            >
                                Logout
                            </Button>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                            >
                            <Avatar 
                                alt={user.username} 
                                src="placeholder.jpg"
                                sx={{bgcolor:deepOrange[500]}}
                                
                                />
                                {/* <AccountCircle /> */}
                            </IconButton>
                        </Box>
                    ) : (
                        <Link href="/login" underline="none" color="inherit">
                            Login
                        </Link>
                    )}
                </Toolbar>
            </AppBar>
        </Box>
    ); 

}

export default NavBar