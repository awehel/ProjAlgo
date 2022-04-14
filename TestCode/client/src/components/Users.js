import React, {useEffect, useState, useContext} from "react";
import axios from 'axios'
import { Link } from "@mui/material";
import MyContext from "../context/MyContext";
import NavBar from "./NavBar";
import { Box, Typography } from "@mui/material";
import { Chip } from "@mui/material";
import { Avatar } from "@mui/material";


const UserList = (props)=>{
    const [userList, setUserList] = useState()

    const [listLoaded, setListLoaded] = useState(false)

    const context = useContext(MyContext)

    useEffect(()=>{
        const getUsers = async()=>{
            try{
                const resp = await axios.get(
                    `http://localhost:8000/api/allUsers`
                )
                console.log(resp.data)
                setUserList(resp.data)
                setListLoaded(true)
            } catch (err){
                console.log(err)
            }
        }
        getUsers()
    }, [])

        
    return (
        <div>
            <NavBar/>
            <Box sx={{marginTop:4}}>
                <Typography variant="h4" fontWeight={700} sx={{marginBottom:3}}>Discover other users</Typography>

                {
                    listLoaded?
                    userList.map((user, index)=>(
                        <Link href={`/user/${user.username}`} underline="hover">
                            <Chip
                                avatar={<Avatar alt={user.username} src="/static.jpg" size='large'/>}
                                key={index}
                                label={user.username}
                                size="large"
                                color={
                                    index%2===0?
                                    'primary':'secondary'
                                }
                                sx={{m:2, p:2}}
                                
                            />
                            </Link>
                    )):null
        
                }
            </Box>
        </div>
    )
}

export default UserList