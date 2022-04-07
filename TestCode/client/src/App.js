import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import Home from './components/Home';
import OneShow from './components/OneShow';
import Search from './components/Search';

function App() {
  
  const [showData, setShowData] = useState({});

  // useEffect(() => {
  //     axios
  //         .get(
  //             `https://api.themoviedb.org/3/tv/popular?api_key=0b8bef9997166d6ef69067b1361557c3&sort_by=popularity.desc&page=1`
  //         )
  //         .then((res) => {
  //             console.log(res.data.results);
  //             setShowData(res.data.results);
  //         })
  //         .catch((err) => console.log(err));
  // }, []);    

  
  
  return (
      <BrowserRouter>
          <div className="App">
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/show/:id" element={<OneShow />} />
                  <Route path="/search" element={<Search/>}/>
              </Routes>
          </div>
      </BrowserRouter>
  );
}

export default App;
