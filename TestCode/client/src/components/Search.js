import axios from "axios";
import React, {useEffect, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import NavBar from "./NavBar";
import ShowCard from "./ShowCard";
import Typography from "@mui/material/Typography";
import { Container, Grid, TextField } from "@mui/material";
import { Paper } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Divider } from "@mui/material";


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
            <NavBar />
            <Container
                sx={{
                    
                }}
                maxWidth="false"
            >
                
                <Box>

                    <Typography color="inherit">Search for TV Show:</Typography>
                    <form onSubmit={submitHandler}>
                        <TextField
                            onChange={inputHandler}
                            type="text"
                            name="searchTerm"
                        />
                        <Button
                            type="Submit"
                            variant="contained"
                            endIcon={<SearchIcon />}
                        >
                            Search
                        </Button>
                    </form>
                </Box>
                <Divider sx={{margin:3}}/>
                <Grid container spacing={2}>
                    {loaded? 
                        results.map((show, index) => (
                            show.poster_path?
                            <Grid item md={12/5} sm={6} xs={12} key={index}>
                                <ShowCard show={show} />
                            </Grid>:null
                        ))
                        : null}
                </Grid>

                {/* {loaded
                    ? results.map((show, index) => (
                          <div key={index}>
                              <Link to={`/show/${show.id}`}>
                                  <h2>{show.name}</h2>
                              </Link>
                          </div>
                      ))
                    : null} */}
            </Container>
        </div>
    );
}

export default Search