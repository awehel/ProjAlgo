import React, { useState, useEffect } from "react";
import axios from "axios";


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


    return(
        <div>
            <p>Wall</p>
            {
                messages?
                messages.map((message, index)=>(
                    <div key={index}>
                        {message.message} posted by {
                            message.author?
                            <span>{message.author.username}</span>
                            :null
                        }
                    </div>
                ))
                
                :null
            }
        </div>
    )

}

export default Wall