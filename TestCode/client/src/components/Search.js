import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";

const Search = (props)=>{

    const [searchTerm, setSearchTerm] = useState ("")
    const [results, setResults] = useState({})
    const [loaded, setLoaded] = useState(false)

    const inputHandler = (e) =>{
        let newStateObject = {...searchTerm}
        newStateObject[e.target.name] = e.target.value
        console.log(e.target.name, e.target.value)
        setSearchTerm(newStateObject)
    }

    const submitHandler = (e)=>{
        e.preventDefault()
                
        axios
            .get(
                `https://api.themoviedb.org/3/search/tv?api_key=0b8bef9997166d6ef69067b1361557c3&query=${searchTerm.searchTerm}&page=1`
            )
            .then((res) => {
                console.log(res.data.results);
                setResults(res.data.results)
                setLoaded(true)
            })
            .catch((err) => console.log(err));
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <label>Search for TV Show:</label>
                <input 
                    onChange={inputHandler}
                    type='text'
                    name="searchTerm"
                />
                <input type="submit" value="Search" />
            </form>
            {
                loaded?
                results.map((show, index)=>(
                    <div key={index}>
                        <Link to={`/show/${show.id}`}>
                            <h2>{show.name}</h2>
                            </Link>
                    </div>
                ))
                :null
            }

        </div>
    )
}

export default Search