import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const OneShow = (props)=>{

    const {id} = useParams()

    const id2 = 110492

    const navigate = useNavigate()

    const [oneShow, setOneShow] = useState({})

    useEffect(()=>{
        axios.get(
            `https://api.themoviedb.org/3/tv/${id}?api_key=0b8bef9997166d6ef69067b1361557c3`
        )
        .then((res)=>{
            console.log(res.data)
            setOneShow(res.data)
        })
        .catch((err)=>console.log(err))
    }, [])

    const submitHandler = ()=>{
        
        axios
            .post(`http://localhost:8000/api/test`, oneShow, {
                withCredentials: true
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                navigate("/");
            })
            .catch((err) => {
                console.log(err.response);
                console.log(err.response.data);
                console.log(err.response.data.errors);
                navigate("/")
            });
    }

    return (
        <div>
            <h2 value="newName">{oneShow.name}</h2>
            <a href="/">Home</a>
            <div>
                <img
                    src={`https://image.tmdb.org/t/p/w500${oneShow.backdrop_path}`}
                    alt={oneShow.name}
                />
                <p>
                    {oneShow.overview}
                </p>
                <p>
                    {oneShow.tagline}
                </p>
                <button onClick={submitHandler}>Add show</button>
            </div>
        </div>
    );
}

export default OneShow