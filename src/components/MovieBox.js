import { Modal, show, Button } from 'react-bootstrap';
import React, { useState,useRef } from 'react';

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({ title, poster_path, vote_average, release_date, overview, id }) => {

    const [show, setShow] = useState(false);
    const [kljuc,setKljuc] = useState('');
    const {iframeRef} = useRef(null);


    const handleShow = async(e) => {
        try{
            const url=`https://api.themoviedb.org/3/movie/${id}/videos?api_key=7ee58e2a9e9084ce0102afe70a68945c`;
            const res= await fetch(url);
            const data= await res.json();
            console.log(data.results[0].key);
            setKljuc(data.results[0].key)
            // setMovies(data.results);
          }
          catch(e){
            console.log(e);
          }
      
        setShow(true);

    };
    const handleClose = () => setShow(false);

    
    

    return (
        <div className="card text-center bg-secondary mb-3">
            <div className="card-body">
                <img className="card-img-top" src={API_IMG + poster_path} alt="Poster"/>
                <div className="card-body">
                    <button type="button" className="btn btn-dark" onClick={(e)=>handleShow(e.id)} >View More</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <div>
                                <iframe
                                    src={`https://www.youtube.com/embed/${kljuc}`}
                                    ref={iframeRef}
                                    width="100%"
                                    title="video"
                                    style={{ width: '100%', height: '200px' }}
                                ></iframe>
                            </div>
                            <h3>{title}</h3>
                            <h4>IMDb: {vote_average}</h4>
                            <h5>Release Date: {release_date}</h5>
                            <br></br>
                            <h6>Overview</h6>
                            <p>{overview}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;