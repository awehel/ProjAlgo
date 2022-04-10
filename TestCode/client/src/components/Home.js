import React, {useEffect, useState, useContext} from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import AppBar from "./AppBar";
import Users from "./Users"
import MyContext from "../context/MyContext";

const Home = (props)=>{

    const [showList, setShowList] = useState({})

    const [loaded, setLoaded] = useState(false)

    const [showData, setShowData] = useState({})

    const context = useContext(MyContext)

    useEffect(() => {
        const getShows = async () => {
            try {
                const resp = await axios.get(
                    `https://api.themoviedb.org/3/tv/popular?api_key=0b8bef9997166d6ef69067b1361557c3&sort_by=popularity.desc&page=1`
                );
                console.log(resp.data.results);
                setShowData(resp.data.results);
                setLoaded(true)
            } catch (error) {
                console.log(error);
            }
        };

        getShows();
    }, [setShowData]);

    return(
        
        <div>
            <AppBar/>
            <h1>Home Page</h1>
            
            {
                context.loggedIn?
                <Link to="/search"><p>Search for a show</p></Link>:null
            }
            <Users/>
            
            {
                loaded?
                showData.map((show, index)=>(
                <div key={index}>
                    <img src={
                        show.backdrop_path?
                        `https://image.tmdb.org/t/p/w500${show.backdrop_path}`
                    :'https://static.vecteezy.com/system/resources/thumbnails/002/267/298/small/tv-show-neon-signs-style-text-free-vector.jpg'
                    } alt={`${show.name}`}/>
                    <Link to={`/show/${show.id}`}><h2>{show.name}</h2></Link>
                    
                </div>
                )):null
            }
        </div>
    )
}

export default Home


