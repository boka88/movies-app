import React,{useState,useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';

const API_URL="https://api.themoviedb.org/3/movie/popular?api_key=7ee58e2a9e9084ce0102afe70a68945c";


function App() {

  const [movies, setMovies]=useState([]);

  useEffect(() => {
    fetch(API_URL)
    .then((res)=>res.json())
    .then(data=>{
      console.log(data);
      setMovies(data.results);
    })
  }, [])



  return (
    <>
        <Navbar bg="light" expand="lg" variant="dark"><h3 style={{color:'blue',margin:'0 auto'}}>Trending Movies</h3></Navbar>
    </>
  );
}

export default App;
