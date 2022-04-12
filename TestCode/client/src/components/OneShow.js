import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { Container } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import AddIcon from "@mui/icons-material/Add";
import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import NavBar from "./NavBar";


const OneShow = (props)=>{
    
    const {id} = useParams()

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
        <Container sx={{backgroundColor: '#F0F8ED', height:'100vh', width:'100vw'}}>
            
            <NavBar/>
            <Typography 
                value="newName" 
                variant="h4"
                style={{fontWeight:600}}
                >
                {oneShow.name}
            </Typography>
            <Button variant="contained" color="secondary" gutterBottom href="/" startIcon={<HomeIcon/>}>
                Home
            </Button>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12} md={6}> 
                    <img
                        src={`https://image.tmdb.org/t/p/w500${oneShow.backdrop_path}`}
                        alt={oneShow.name}
                    />
                    <Button
                        variant="contained"
                        size="medium"
                        onClick={submitHandler}
                        startIcon={<AddIcon/>}
                    >
                        Add show
                    </Button>
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <Typography variant="subtitle1">{oneShow.overview}</Typography>
                    <Typography variant="subtitle2">"{oneShow.tagline}"</Typography>
                    <br/>
                    
                </Grid>

            </Grid>
        </Container>
    );
}

export default OneShow