import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const Search = (props)=>{

    const [searchTerm, setSearchTerm] = useState ("")

    const inputHandler = (e) =>{
        let newStateObject = {...searchTerm}
        newStateObject[e.target.name] = e.target.value
        console.log(e.target.name, e.target.value)
        setSearchTerm(newStateObject)
    }

    const submitHandler = ()=>{
        axios.get(
            `https://api.themoviedb.org/3/tv/${searchTerm}?api_key=0b8bef9997166d6ef69067b1361557c3`
        )
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>console.log(err))
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Search for TV Show:</label>
                <input 
                    onChange={inputHandler}
                    type='text'
                />
            </form>
        </div>
    )
}

export default Search