import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import Wall from "./Wall";
import { Grid } from "@mui/material";

const Comments = (props)=>{

    const {activeUser, baseUser} = props
    // const activeId = activeUser._id
    // const baseId = baseUser._id
    const navigate = useNavigate()

    // const [baseUser, setBaseUser] = useState({})

    // const [loaded, setLoaded] = useState(false)

    // const [messages, setMessages] = useState({})
    
    
    // useEffect(()=>{
    //     const getHomeUser = async ()=>{
    //         try {
    //             const resp = await axios.get(`http://localhost:8000/api/users/${homeUser}`)
    //             console.log(resp.data)
    //             setBaseUser(resp.data)
    //             setLoaded(true)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getHomeUser()
    // }, [])
    // useEffect(()=>{
    //     const getComments = async ()=>{
    //         try {
    //             const resp = await axios.get(`http://localhost:8000/api/posts/:${baseUser._id}`)
    //             console.log(resp.data)
    //             setMessages(resp.data)
    //             setLoaded(true)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     getComments()
    // }, [])
    
    const [message, setMessage] = useState("") 
    

    // useEffect(()=>{
        
    //     let newState = {
    //         message: "",
    //         author: activeUser,
    //         receiver: baseUser
    //     }

    //     const slowLoad = async ()=>{
    //         try {
    //             setComment({
    //                 message: "",
    //                 // author: activeUser,
    //                 // receiver: baseUser,
    //             });
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    //     setTimeout(slowLoad, 1000)
    // }, [])

    const submitComment = (e)=>{
        
        e.preventDefault()
        const newObject = {
            message: message,
            author: activeUser, 
            receiver: baseUser
        }
        axios.post(`http://localhost:8000/api/post`, newObject, )
        .then((res)=>{
            console.log(res)
            console.log(res.data)
            window.location.reload()
        })
        .catch((err)=>{
            console.log(err.response.data)
        })
    }

    const handleChange =(e)=>{
        setMessage({
            ...message,
            [e.target.name]:e.target.value
        })
    }

    return (
        <Container>
            <Grid
                sx={{
                    
                }}
            >
                <Grid item>

                </Grid>
                <form onSubmit={submitComment}>
                    <TextField
                        sx={{
                            // marginTop: 5,
                            input: { color: "secondary" },
                            background: "white",
                        }}
                        type="text"
                        name="message"
                        label="Leave a comment"
                        variant="outlined"
                        fullWidth
                        onChange={(e) => setMessage(e.target.value)}
                    />
                    <input
                        type="hidden"
                        name="author"
                        // value={activeUserid}
                    />
                    <input
                        type="hidden"
                        name="receiver"
                        // value={baseUserid}
                    />

                    <Button
                        disabled={message?false:true}
                        type="Submit"
                        variant="contained"
                        sx={{ marginTop: 1 }}
                    >
                        Comment
                    </Button>
                </form>
                {/* <Typography>
                    {activeUser.username} on {baseUser.username}'s wall
                </Typography> */}
            </Grid>
        </Container>
    );
}

export default Comments