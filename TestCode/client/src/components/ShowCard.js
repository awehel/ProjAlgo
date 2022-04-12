import React from "react";
import Typography from '@mui/material/Typography'
import { Container, Grid } from "@mui/material";
import { Paper } from "@mui/material"
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";


const ShowCard = (props)=>{

    const {show} = props

    return (
        <div>
                <Card elevation={2}>
                    <Link to={`/show/${show.id}`} underline="none">
                        <CardMedia 
                            component="img"
                            alt={`${show.name}`}
                            height="200"
                            image={`https://image.tmdb.org/t/p/w500${show.backdrop_path}`}
                        
                        />
                    </Link>
                    {/* <img src={
                        show.backdrop_path?
                        `https://image.tmdb.org/t/p/w500${show.backdrop_path}`
                    :'https://static.vecteezy.com/system/resources/thumbnails/002/267/298/small/tv-show-neon-signs-style-text-free-vector.jpg'
                    } alt={`${show.name}`}/> */}
                    <CardContent>
                        <Typography variant="h6" gutterBottom style={{underline:'none'}}>{show.name}</Typography>
                    </CardContent>
                </Card>
        </div>
            );
}

export default ShowCard