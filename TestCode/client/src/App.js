import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import OneShow from './components/OneShow';
import Search from './components/Search';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Layout from './components/Layout';
import MyContext from './context/MyContext';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
    palette:{
        primary:{
            main:'#1D3557'
        },
        secondary:{
            main:'#A8DADC'
        },
        background:{
            default:'#dcd9d3'
        }
    },
    typography:{
        fontFamily: 'Poppins'
    },
    background:{
        default:'red'
    },
    overides:{
        CssBaseline:{
            "global":{
                body:{
                    backgroundColor: '#98c1d9'
                }
            }
        }
    }
})


function App() {
    
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>

                <BrowserRouter>
                    <div className="App">
                        <MyContext.Provider value={{ loggedIn, setLoggedIn }}>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/show/:id" element={<OneShow />} />
                                <Route
                                    path="/user/:username"
                                    element={<Profile />}
                                    />
                                <Route path="/search" element={<Search />} />
                                <Route path="/login" element={<Login />} />
                                <Route
                                    path="/register"
                                    element={<Register />}
                                    />
                            </Routes>
                        </MyContext.Provider>
                    </div>
                </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
