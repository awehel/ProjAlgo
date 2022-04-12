import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import NavBar from "./NavBar";
import Comments from "./Comments";
import Wall from "./Wall";


const Profile = (props)=>{

    const {username} = useParams()

    const [showList, setShowList] = useState([])
    const [loaded, setLoaded] = useState(false)
    const [user, setUser] = useState({});
    const [comment, setComment] = useState({})
    const [baseUser, setBaseUser] = useState({})

    const navigate = useNavigate()

    const activeUserId = user._id
    const baseUserId = baseUser._id
    
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

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/users", { withCredentials: true })
            .then((res) => {
                console.log(res.data);
                setUser(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    useEffect(() => {
        const getHomeUser = async () => {
            try {
                const resp = await axios.get(
                    `http://localhost:8000/api/users/${username}`
                );
                console.log(resp.data);
                setBaseUser(resp.data);
                
            } catch (error) {
                console.log(error);
            }
        };
        getHomeUser();
    }, []);

    const submitHandler = (nameFromBelow, activeUser) => {
        
        axios
            .post(`http://localhost:8000/api/edit/${nameFromBelow}`, activeUser, {
                withCredentials: true,
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
                setShowList(showList.filter(show => show.name !== nameFromBelow));
            })
            .catch((err) => {
                console.log(err)
                console.log(err.response)
                console.log(err.response.data.errors)
            });
    };

    return (
        <div>
            <NavBar/>
            <h1>{username}'s page</h1>
            <Link to="/"><p>Home</p></Link>
            <div>
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
                    {
                        // show.savedBy.find(entry => entry.username === `${user.username}` )?
                        // <p>Test</p>:null
                        `${username}` === `${user.username}`?
                        
                        <button onClick={()=>submitHandler(`${show.name}`, user)}>Delete</button>:null

                    }
                    </div>
                )):null
            }

            </div>
            <div>
                {
                    loaded?
                    <div>
                        <Comments activeUser={activeUserId} baseUser={baseUserId}/>
                        <Wall userId={baseUserId}/>
                    </div>
                    :null
                }
            </div>
            
            
            
        </div>
    )

}

export default Profile