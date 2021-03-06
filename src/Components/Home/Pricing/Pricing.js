import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';

const Pricing = () => {
    return (
        <div>
            <h1 className='custom-text-primary fw-bold mt-5 text-center'>PRICING PLANS</h1>
            <p className='text-center text-secondary lh-lg'>Thvme natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam rhonc usaecenastem pus, tellus eget...</p>
            <Container className='my-5 text-center'>
                <Row xm = {1} md = {3} className = 'g-4'>
                    <Col>
                        <div className="border border-1 border-secondary p-5">
                            <h3 className='custom-text-primary'>STANDARD</h3>
                            <h1><sup>$</sup>896</h1>
                            <p>/per month</p>
                            <div className='lh-lg text-secondary'>
                                <p className='mt-4'>Tourism is travel for pleasure or business also the theory of touring. </p>
                                <p className='mt-4'>the business of attracting accommodating business of operating tours</p>
                                <p className='mt-4'>The World Tourism Organization defines tourism more generally.</p>
                            </div>
                            <Button variant=" outline-secondary" className='custom-text-warning'>VIEW MORE<i className="fas fa-long-arrow-alt-right ms-3"></i></Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="border border-1 border-secondary p-5 ">
                            <h3 className='custom-text-primary'>PREMIUM</h3>
                            <h1><sup>$</sup>1386</h1>
                            <p>/per month</p>
                            <div className='lh-lg text-secondary'>
                                <p className='mt-4'>Tourism is travel for pleasure or business also the theory of touring. </p>
                                <p className='mt-4'>the business of attracting accommodating business of operating tours</p>
                                <p className='mt-4'>The World Tourism Organization defines tourism more generally.</p>
                            </div>
                            <Button variant=" outline-secondary" className='custom-text-warning'>VIEW MORE<i className="fas fa-long-arrow-alt-right ms-3"></i></Button>
                        </div>
                    </Col>
                    <Col>
                        <div className="border border-1 border-secondary p-5">
                            <h3 className='custom-text-primary'>DELUXE</h3>
                            <h1><sup>$</sup>1250</h1>
                            <p>/per month</p>
                            <div className='lh-lg text-secondary'>
                                <p className='mt-4'>Tourism is travel for pleasure or business also the theory of touring. </p>
                                <p className='mt-4'>the business of attracting accommodating business of operating tours</p>
                                <p className='mt-4'>The World Tourism Organization defines tourism more generally.</p>
                            </div>
                            <Button variant=" outline-secondary" className='custom-text-warning'>VIEW MORE<i className="fas fa-long-arrow-alt-right ms-3"></i></Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Pricing;