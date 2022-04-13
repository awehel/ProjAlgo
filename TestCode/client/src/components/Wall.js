import React, { useState, useEffect } from "react";
import axios from "axios";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";


const Wall = (props)=>{

    const {userId} = props
    const id = userId
    const [messages, setMessages] = useState([])
    const [loaded, setLoaded] = useState(false)

     useEffect(()=>{
        const getComments = async ()=>{
            try {
                console.log(id)
                const resp = await axios.get(`http://localhost:8000/api/posts/${id}`)
                console.log(resp.data)
                setMessages(resp.data)
                setLoaded(true)
            } catch (error) {
                console.log(error)
            }
        }

        setTimeout(getComments, 500)

        
    }, [])


    return (
        <div>
            <br/>
            {messages ? (
                <List>
                    {messages.map((message, index) => (
                        <div>
                            <ListItem key={index} sx={{ background: "white" }}>
                                <ListItemAvatar>
                                    <Avatar
                                        alt={message.author.username}
                                        src="/static/images/avatar/1.jpg"
                                    />
                                </ListItemAvatar>
                                <ListItemText
                                    primary={`${message.author.username} says: `}
                                    secondary={
                                        <React.Fragment>
                                            <Typography
                                                sx={{ display: "inline" }}
                                                component="span"
                                                variant="body2"
                                                color="text.primary"
                                            >
                                                {message.message}
                                            </Typography>
                                        </React.Fragment>
                                    }
                                />
                            </ListItem>
                            <Divider variant="inset" component="li" />
                        </div>
                    ))}
                </List>
            ) : null}
        </div>
    );
    
}

export default Wall
// messages.map((message, index)=>(
//     <div key={index}>
//         {message.message} posted by {
//             message.author?
//             <span>{message.author.username}</span>
//             :null
//         }
//     </div>
// ))