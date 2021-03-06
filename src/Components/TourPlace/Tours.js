import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth'
import Tour from '../Tour/Tour';

const Tours = () => {
    const {isLoading} = useAuth()

    const [tours, setTours] = useState([])
    useEffect(() => {
        fetch('https://whispering-dusk-80653.herokuapp.com/TourService')
            .then(res => res.json())
            .then(data => setTours(data))
    }, [])
        if(isLoading) {
            return <div className = 'text-center my-5'><Spinner animation="border" variant="warning" /></div>
        }       
    return (
        <div>
            <h1 className='text-uppercase text-center fw-bold custom-text-primary my-5'>Our Popular Place</h1>
            <Container className='my-5'>
                <Row xs={1} md={3} className="g-4">
                    {
                        tours.map(tour => <Tour tour={tour} key={tour.id}></Tour>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Tours;