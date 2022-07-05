import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar } from 'react-bootstrap';


function App() {

  return (
    <>
        <Navbar bg="light" expand="lg" variant="dark"><h3 style={{color:'blue',margin:'0 auto'}}>Trending Movies</h3></Navbar>
    </>
  );
}

export default App;
