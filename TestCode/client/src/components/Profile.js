import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Profile = (props)=>{

    const {username} = useParams()

    const [showList, setShowList] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/showsbyuser/${username}`, {
            withCredentials: true
        })
        .then((res)=>{
            console.log(res.data)
            setShowList(res.data)
            setLoaded(true)
        })
        .catch((err)=>{
            console.log(err)
        })
    }, [])

    return (
        <div>
            <h1>Welcome {username}</h1>
            <Link to="/"><p>Home</p></Link>
            {
                loaded?
                showList.map((show, index)=>(
                    <div key={index}>
                        <h3>{show.name}</h3>
                        <img src={
                        show.backdrop_path?
                        `https://image.tmdb.org/t/p/w500${show.backdrop_path}`
                    :'https://static.vecteezy.com/system/resources/thumbnails/002/267/298/small/tv-show-neon-signs-style-text-free-vector.jpg'
                    } alt={`${show.name}`}/>
                    </div>
                )):null
            }
        </div>
    )

}

export default Profile