import React, {useEffect, useState, useContext} from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import MyContext from "../context/MyContext";

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
            Users:
            {
                listLoaded?
                userList.map((user, index)=>(
                    <p key={index}><Link to={`/user/${user.username}`}>{user.username}</Link></p>
                )):null
    
            }
        </div>
    )
}

export default UserList