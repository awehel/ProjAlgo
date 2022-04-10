import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import './App.css';
import Home from './components/Home';
import OneShow from './components/OneShow';
import Search from './components/Search';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import MyContext from './context/MyContext';
import axios from 'axios';


function App() {
    
    const [loggedIn, setLoggedIn] = useState(false)

    return (
        <BrowserRouter>
            <div className="App">
                <MyContext.Provider value={{loggedIn, setLoggedIn}}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/show/:id" element={<OneShow />} />
                        <Route path="/search" element={<Search />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/user/:username" element={<Profile />} />
                    </Routes>
                </MyContext.Provider>
            </div>
        </BrowserRouter>
    );
}

export default App;
